import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {IPlayer, CanAffordOptions} from '../../IPlayer';
import {MessageBuilder} from '../../logs/MessageBuilder';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';

export class NonHypoxicSmallAnimals extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.NON_HYPOXIC_SMALL_ANIMALS,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      cost: 11,

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {oxygen: 3},

      metadata: {
        cardNumber: 'x056',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.minus().plants(2, {all}).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: {
          text: 'Requires 3% oxygen or higher and that you remove 2 plants from any player.',
          align: 'left',
        },
      },
    });
  }
 
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    if (player.game.isSoloMode()) {
      return true;
    }
    return player.game.getPlayers().filter((p) => p.plants >= 2 && ( p.id !== player.id && !p.plantsAreProtected() ) ).length >= 1;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      player.game.someoneHasRemovedOtherPlayersPlants = true;
      return undefined;
    }
    const candidates = player.game.getPlayers().filter((p) => ( p.id !== player.id && !p.plantsAreProtected() ) && p.plants >= 2);

    const removalOptions = candidates.map((candidate) => {
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
