import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class SolidStateWildEnergy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SOLID_STATE_WIND_ENERGY,
      cost: 7,
      tags: [Tag.POWER, Tag.BUILDING],
      requirements: {oxygen: 5},
      victoryPoints: 1,

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'x152',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1));
        }),
        description: 'Requires 5% oxygen. Increase your energy production 1 step.',
      },
    });
  }
}
