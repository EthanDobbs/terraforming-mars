import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import { IPlayer, CanAffordOptions } from '../../IPlayer';
import { MessageBuilder } from '../../logs/MessageBuilder';
import { SelectOption } from '../../inputs/SelectOption';
import { OrOptions } from '../../inputs/OrOptions';
import { Size } from '../../../common/cards/render/Size';
import { RemoveResourcesFromCard } from '../../deferredActions/RemoveResourcesFromCard';

export class SubterranianCreatures extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SUBTERRANEAN_CREATURES,
      tags: [Tag.ANIMAL],
      cost: 8,

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 2},
      requirements: {oxygen: 4},

      metadata: {
        cardNumber: 'x057',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.minus().plants(2, {all}).nbsp.or(Size.SMALL).nbsp.minus().microbes(2, {all}).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: 'Requires 4% oxygen or higher and that you either remove 2 plants or 2 microbes from any player.',
      },
    });
  }
 
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
      return player.game.getPlayers().filter((p) => p.plants >= 2 && ( p.id !== player.id && !p.plantsAreProtected() ) ).length >= 1 ||
      RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.MICROBE, false).filter( (card) => card.resourceCount >= 2).length >= 1;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      player.game.someoneHasRemovedOtherPlayersPlants = true;
      return undefined;
    }
    const plantCandidates = player.game.getPlayers().filter((p) => ( p.id !== player.id && !p.plantsAreProtected() ) && p.plants >= 2);
    const microbeCandidates = RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.MICROBE, false).filter( (card) => card.resourceCount >= 2);

    const orOptions = new OrOptions();
    if (plantCandidates.length === 0) {
      this.RemoveMicrobes(player);
      return undefined;
    } else {
      orOptions.options.push(new SelectOption('Remove plants', 'Confirm')
        .andThen(() => {return this.RemovePlants(plantCandidates, player)})
      );
    }
    if (microbeCandidates.length === 0) {
      this.RemovePlants(plantCandidates, player);
      return undefined;
    } else {
      orOptions.options.push(this.RemoveMicrobes(player).execute() as OrOptions);
    }
    return orOptions;
  }
  private RemoveMicrobes(player: IPlayer): RemoveResourcesFromCard {
    return new RemoveResourcesFromCard(player, CardResource.MICROBE, 2, false, true);
  }
  private RemovePlants(plantCandidates: IPlayer[], player: IPlayer) {
    const removalOptions = plantCandidates.map((candidate) => {
      let qtyToRemove = 2;

      // Botanical Experience hook.
      if (candidate.cardIsInEffect(CardName.BOTANICAL_EXPERIENCE)) {
        qtyToRemove /= 2;
      }

      const message =
        new MessageBuilder('Remove ${0} plants from ${1}')
          .number(qtyToRemove)
          .rawString(candidate.name)
          .getMessage();

      return new SelectOption(message, 'Remove plants').andThen(() => {
        candidate.stock.deduct(Resource.PLANTS, qtyToRemove, {log: true, from: player});
        return undefined;
      });
    });
    return new OrOptions(...removalOptions);
  }
}
