import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CanAffordOptions, IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';

export class FloaterAcquisition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.FLOATER_ACQUISITION,
      cost: 6,
      
      metadata: {
        cardNumber: 'x241',
        renderData: CardRenderer.builder((b) => {
          b.text('Steal').nbsp.floaters(2, {all});
        }),
        description: 'Steal 2 floaters from another player.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    if (player.game.isSoloMode()) {
      return true;
    }
    return RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.FLOATER, false).filter( (card) => card.resourceCount >= 2).length >= 1;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      return undefined;
    }
    player.game.defer(new RemoveResourcesFromCard(player, CardResource.FLOATER, 2, false, true)).andThen(() => {
      player.game.defer(new AddResourcesToCard(player, CardResource.FLOATER, {count: 2}));
      return undefined;
    });
    return undefined;
  }
}
