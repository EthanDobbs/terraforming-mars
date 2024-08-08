import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class ErosionReducingGreenery extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EROSION_REDUCING_GREENERY,
      cost: 12,
      tags: [Tag.PLANT],
      requirements: {temperature: -16},

      behavior: {
        production: {plants: 1},
        stock: {plants: 1},
        tr: 1,
      },

      metadata: {
        cardNumber: 'xB120',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).nbsp.plants(1).nbsp.tr(1);
        }),
        description: 'Requires -16°C or warmer. Increase your plant production 1 step, gain 1 plant, and raise your TR 1 step.',
      },
    });
  }
}
