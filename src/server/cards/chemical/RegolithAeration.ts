import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class RegolithAeration extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.REGOLITH_AERATION,
      cost: 13,
      tags: [Tag.BUILDING],

      behavior: {
        production: {energy: -2, plants: 2},
        tr: 1,
      },

      metadata: {
        cardNumber: 'x109',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().plants(2);
          });
          b.tr(1);
        }),
        description: 'Decrease your energy production 2 steps, increase your plant production 2 steps, and raise your TR 1 step.',
      },
    });
  }
}
