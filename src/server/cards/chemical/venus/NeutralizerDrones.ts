import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class NeutralizerDrones extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.NEUTRALIZER_DRONES,
      tags: [Tag.VENUS],
      cost: 6,
      requirements: {floaters: 3},

      behavior: {
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'x286',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).br;
        }),
        description: 'Requires 3 floaters. Raise Venus 1 step.',
      },
    });
  }
}
