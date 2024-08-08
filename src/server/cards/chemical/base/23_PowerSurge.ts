import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {digit} from '../../Options';

export class PowerSurge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.POWER_SURGE,
      tags: [Tag.POWER],
      cost: 3,
      requirements: {tag: Tag.POWER, count: 2},
      behavior: {
        stock: {energy: 8},
      },

      metadata: {
        cardNumber: 'xB23',
        renderData: CardRenderer.builder((b) => {
          b.energy(8, {digit});
        }),
        description: 'Requires 2 power tags. Gain 8 energy.',
      },
    });
  }
}
