import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class HybridVessels extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.HYBRID_VESSELS,
      tags: [Tag.SPACE],
      cost: 11,
      victoryPoints: 1,

      behavior: {
        production: {energy: -1, megacredits: 2},
      },

      requirements: {tag: Tag.SCIENCE, count: 2},
      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'x396',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.space({played}).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => {
            pb.minus().energy(1).nbsp;
            pb.plus().megacredits(2);
          });
        }),
        description: {
          text: 'Requires 2 science tags. Decrease your energy production 1 step and increase your M€ production 2 steps.',
          align: 'left',
        },
      },
    });
  }
}
