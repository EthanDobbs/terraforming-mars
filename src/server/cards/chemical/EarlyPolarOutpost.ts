import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class EarlyPolarOutpost extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EARLY_POLAR_OUTPOST,
      cost: 11,
      tags: [Tag.BUILDING],
      requirements: {temperature: -16, max: true},
      victoryPoints: 2,

      behavior: {
        stock: {heat: 3},
      },

      metadata: {
        cardNumber: 'x167',
        renderData: CardRenderer.builder((b) => {
          b.heat(3);
        }),
        description: 'Requires -16°C or lower. Gain 3 heat.',
      },
    });
  }
}
