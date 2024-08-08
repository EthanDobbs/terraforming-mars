import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';

export class InterplanetaryTradingPort extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.INTERPLANETARY_TRADING_PORT,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}, addTradeFleet: 1},
      },

      metadata: {
        cardNumber: 'xP43',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).tradeFleet();
        }),
        description: 'Place a colony and gain a trade fleet.',
      },
    });
  }
}
