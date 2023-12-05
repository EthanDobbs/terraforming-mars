import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class RiceFields extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RICE_FIELDS,
      cost: 18,
      tags: [Tag.PLANT],
      requirements: {temperature: 4},

      behavior: {
        production: {plants: 1, megacredits: 2},
        greenery: {},
      },

      metadata: {
        cardNumber: 'x128',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).plants(1)).nbsp.greenery();
        }),
        description: 'Requires +4°C or higher. increase your M€ production 2 steps, your plant production 1 step, and place a greenery tile.',
      },
    });
  }
}
