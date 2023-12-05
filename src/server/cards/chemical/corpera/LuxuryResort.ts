import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class LuxuryResort extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUXURY_RESORT,
      tags: [Tag.BUILDING],
      cost: 9,
      victoryPoints: 1,
      requirements: {temperature: 0},

      behavior: {
        production: {energy: -1, megacredits: 4},
      },

      metadata: {
        cardNumber: 'x216',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(4);
          }).nbsp;
        }),
        description: 'Requires 0°C or warmer. Decrease your energy production 1 step and increase your M€ production 4 steps.',
      },
    });
  }
}
