import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class CashCrops extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CASH_CROPS,
      cost: 7,
      tags: [Tag.PLANT],
      requirements: {temperature: -4},

      behavior: {
        production: {plants: 1, megacredits: 3},
        stock: {plants: 1},
      },

      metadata: {
        cardNumber: 'x232',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3).plants(1)).plants(1);
        }),
        description: 'Requires -4°C or warmer. Increase your M€ production 3 steps and your plant production 1 step. Gain 1 plant.',
      },
    });
  }
}
