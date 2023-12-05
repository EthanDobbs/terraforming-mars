import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class LargePowerPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LARGE_POWER_PLANT,
      cost: 14,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {energy: 2},
        stock: {energy: 2},
      },

      metadata: {
        cardNumber: 'x139',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2)).energy(2);
        }),
        description: 'Increase your energy production 2 steps and gain 2 energy.',
      },
    });
  }
}
