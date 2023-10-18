import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class CondenstationCatalysts extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CONDENSATION_CATALYSTS,
      tags: [Tag.VENUS],
      cost: 8,
      requirements: {venus: 4},

      behavior: {
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'x287',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).br;
        }),
        description: 'Requires Venus 4% or higher. Raise Venus 1 step.',
      },
    });
  }
}
