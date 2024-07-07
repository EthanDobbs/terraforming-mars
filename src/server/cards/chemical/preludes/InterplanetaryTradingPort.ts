import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {IPlayer} from '../../../IPlayer';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';
import {SelectColony} from '../../../inputs/SelectColony';
import {IColony} from '../../../colonies/IColony';

export class InterplanetaryTradingPort extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.INTERPLANETARY_TRADING_PORT,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}, addTradeFleet: 1},
      },

      metadata: {
        cardNumber: 'xP46',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 5 M€ to trade.', (eb) => {
            eb.megacredits(5).startAction.trade();
          }).br;
          b.colonies(1).tradeFleet();
        }),
        description: 'Place a colony and gain a trade fleet.',
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.stock.megacredits >= 5 && player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }
  public action(player: IPlayer) {
    player.stock.megacredits -= 5;
    const tradeableColonies = ColoniesHandler.tradeableColonies(player.game);
    return new SelectColony('Select colony tile for trade', 'trade', tradeableColonies)
      .andThen((colony: IColony) => {
        colony.trade(player);
        return undefined;
      });
  }
}
