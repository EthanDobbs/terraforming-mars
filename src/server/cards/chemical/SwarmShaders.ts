import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class SwarmShaders extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SWARM_SHADERS,
      tags: [Tag.VENUS, Tag.SPACE],
      cost: 18,

      behavior: {
        global: {venus: 2},
      },

      metadata: {
        cardNumber: 'x283',
        renderData: CardRenderer.builder((b) => {
          b.venus(2).br;
        }),
        description: 'Raise Venus 2 steps.',
      },
    });
  }
}
