import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class LunarPort extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUNAR_PORT,
      tags: [Tag.EARTH],
      cost: 16,
      victoryPoints: 1,

      behavior: {
        colonies: {addTradeFleet: 1},
        production: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'x358',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3))
          b.tradeFleet();
        }),
        description: 'Increase your M€ production 3 steps and gain a trade fleet.',
      },
    });
  }
}
