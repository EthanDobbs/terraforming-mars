import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import {SelectColony} from '../../inputs/SelectColony';
import {IColony} from '../../colonies/IColony';
import {Tag} from '../../../common/cards/Tag';
import {ColoniesHandler} from '../../colonies/ColoniesHandler';

export class CommissionedFleet extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 8,
      name: CardName.COMMISSIONED_FLEET,
      type: CardType.EVENT,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {addTradeFleet: 1},
      },

      metadata: {
        cardNumber: 'x317',
        renderData: CardRenderer.builder((b) => {
          b.tradeFleet().nbsp.trade();
        }),
        description: 'Gain a trade fleet, then trade for free.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const tradeableColonies = ColoniesHandler.tradeableColonies(player.game);
    return new SelectColony('Select colony tile for trade', 'trade', tradeableColonies)
      .andThen((colony: IColony) => {
        colony.trade(player);
        return undefined;
      });
  }
}
