import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class GrandStadium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GRAND_STADIUM,
      tags: [Tag.BUILDING],
      cost: 5,
      victoryPoints: 1,
      requirements: {cities: 3},

      behavior: {
        production: {energy: -1, megacredits: 3},
      },

      metadata: {
        cardNumber: 'xB101',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          }).nbsp;
        }),
        description: 'Decrease your energy production 1 step and increase your M€ production 4 steps.',
      },
    });
  }
}
