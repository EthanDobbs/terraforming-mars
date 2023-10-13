import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class PrintManufacturing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PRINT_MANUFACTURING,
      tags: [Tag.BUILDING],
      cost: 8,

      behavior: {
        production: {energy: -1, megacredits: 2, steel: 1},
      },

      metadata: {
        cardNumber: 'x226',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2).steel(1);
          });
        }),
        description: 'Lower your energy production 1 step, raise your MC produciton 2 steps, and your steel production 1 step.',
      },
    });
  }
}
