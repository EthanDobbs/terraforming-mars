import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class LakeOfAphrodite extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LAKE_OF_APHRODITE,
      tags: [Tag.VENUS],
      cost: 13,
      requirements: {venus: 20},
      victoryPoints: 2,

      behavior: {
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'x291',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).br;
        }),
        description: 'Requires Venus 20%. Raise Venus 1 step.',
      },
    });
  }
}
