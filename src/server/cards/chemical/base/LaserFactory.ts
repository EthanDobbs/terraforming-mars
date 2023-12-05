import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class LaserFactory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LASER_FACTORY,
      cost: 12,
      tags: [Tag.BUILDING],

      behavior: {
        production: {energy: -1, titanium: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'x108',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().titanium(1).heat(2);
          });
        }),
        description: 'Decrease your energy production 1 step. Increase your titanium production 1 step and your heat production 2 steps.',
      },
    });
  }
}
