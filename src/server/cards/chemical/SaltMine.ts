import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SaltMine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SALT_MINE,
      tags: [Tag.BUILDING],
      cost: 14,

      behavior: {
        production: {energy: -1, megacredits: 3},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: 'x214',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          }).nbsp;
          b.oxygen(1);
        }),
        description: 'Lower your energy production 1 step, raise your MC production 3 steps, and raise the oxygen 1 step.',
      },
    });
  }
}
