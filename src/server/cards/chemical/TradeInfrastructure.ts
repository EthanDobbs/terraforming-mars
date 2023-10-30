import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';

export class TradeInfrastructure extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.TRADE_INFRASTRUCTURE,

      behavior: {
        stock: {energy: 4},
        colonies: {addTradeFleet: 1, tradeDiscount: 1},
      },

      metadata: {
        cardNumber: 'xP50',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you trade, you pay 1 less resource for it.', (eb) => {
            eb.trade().startEffect.tradeDiscount(1);
          }).br;
          b.tradeFleet().energy(4);
        }),
        description: 'Gain a trade fleet and 4 energy.'
      },
    });
  }
}
