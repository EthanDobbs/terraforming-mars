import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {max} from '../../Options';

export class BuriedSettlement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BURIED_SETTLEMENT,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 12,
      requirements: {oxygen: 5, max},

      behavior: {
        city: {},
        production: {energy: -1, megacredits: 2},
      },

      metadata: {
        cardNumber: 'xB86',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          });
          b.city();
        }),
        description: 'Oxygen must be 5% or lower. Decrease your energy production 1 step and increase your M€ production 2 steps. Place a city tile.',
      },
    });
  }
}
