import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class AtmosphericPressureEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ATMOSPHERIC_PRESSURE_ENGINE,
      cost: 9,
      tags: [Tag.POWER, Tag.BUILDING],
      requirements: {oxygen: 9},
      victoryPoints: 1,

      behavior: {
        production: {energy: 2},
      },

      metadata: {
        cardNumber: 'x153',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2));
        }),
        description: 'Requires 9% oxygen or higher. Raise your energy production 2 steps.',
      },
    });
  }
}
