import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {CanAffordOptions} from '../../../IPlayer';
import {RemoveResourcesFromCard} from '../../../deferredActions/RemoveResourcesFromCard';

export class Raptors extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.RAPTORS,
      tags: [Tag.ANIMAL],
      cost: 12,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}},
      requirements: {oxygen: 13},

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'x052',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.vpText('1 VP for each animal on this card.').br;
          b.minus().animals(2, {all});
        }),
        description: {
          text: 'Requires 13% oxygen. Remove 2 animals from any player.',
          align: 'left',
        },
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    if (player.game.isSoloMode()) {
      return true;
    }
    return RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.ANIMAL, false).filter( (card) => card.resourceCount >= 2).length >= 1;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      return undefined;
    }
    player.game.defer(new RemoveResourcesFromCard(player, CardResource.ANIMAL, 2, {mandatory: true}));
    return undefined;
  }
}

