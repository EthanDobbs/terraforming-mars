import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class BasaltMining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BASALT_MINING,
      tags: [Tag.VENUS],
      cost: 20,
      requirements: {venus: 8},

      behavior: {
        global: {venus: 2},
        production: {energy: -1, steel: 1, megacredits: 2}
      },

      metadata: {
        cardNumber: 'x288',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().steel(1).megacredits(2);
          }).br;
          b.venus(2).br;
        }),
        description: 'Requires Venus 8% or higher. Decrease your energy production 1 step. Increase your steel production 1 step and your M€ production 2 steps. Raise Venus 2 steps.',
      },
    });
  }
}
