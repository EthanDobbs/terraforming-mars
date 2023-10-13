import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class UpperMantleBoring extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.UPPER_MANTLE_BORING,
      tags: [Tag.BUILDING],
      cost: 16,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: 1,

      behavior: {
        production: {energy: -1, titanium: 2},
        stock: {titanium: 3},
      },

      metadata: {
        cardNumber: 'x230',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().titanium(2);
          });
          b.titanium(3);
        }),
        description: 'Requires that you have 4 science tags. Lower your energy production 1 step, raise your ttianium produciton 2 steps, and gain 2 titanium.',
      },
    });
  }
}
