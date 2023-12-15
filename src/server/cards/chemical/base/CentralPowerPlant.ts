import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class CentralPowerPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CENTRAL_POWER_PLANT,
      cost: 9,
      tags: [Tag.POWER, Tag.BUILDING],
      requirements: {tag: Tag.POWER, count: 2},

      behavior: {
        production: {energy: 2},
        stock: {energy: 3},
      },

      metadata: {
        cardNumber: 'x150',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2)).energy(3);
        }),
        description: 'Requires 2 power tags. Increase your energy production 2 steps and gain 3 energy.',
      },
    });
  }
}
