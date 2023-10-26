import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MicrogravityLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MICROGRAVITY_LAB,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 8,
      requirements: {tag: Tag.SCIENCE, count: 4},

      behavior: {
        production: {megacredits: 2, energy: -1},
        stock: {megacredits: {colonies: {colonies: {}}, each: 5}}
      },

      metadata: {
        cardNumber: 'x362',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2)
          });
          b.megacredits(5).slash().colonies(1);
        }),
        description: 'Requires 4 science tags. Decrease your energy production 1 step, increase your M€ production 2 steps, and gain 5 M€ for each colony you own.',
      },
    });
  }
}
