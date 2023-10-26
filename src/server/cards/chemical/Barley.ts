import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class Barley extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BARLEY,
      cost: 8,
      tags: [Tag.PLANT],
      requirements: {temperature: -8},

      behavior: {
        production: {plants: 1, megacredits: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x124',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).plants(1)).plants(2);
        }),
        description: 'Requires -8°C or warmer. Increase your M€ production 1 step and your plant production 1 step. Gain 2 plants.',
      },
    });
  }
}
