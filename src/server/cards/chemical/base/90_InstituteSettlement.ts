import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {max} from '../../Options';

export class InstituteSettlement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INSTITUTE_SETTLEMENT,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 17,
      requirements: {temperature: -18, max},
      victoryPoints: 1,

      behavior: {
        city: {},
        production: {energy: -1, plants: 1},
      },

      metadata: {
        cardNumber: 'xB90',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().plants(1);
          });
          b.city();
        }),
        description: 'Requires -18°C or colder. Decrease your energy production 1 step and increase your plant production 1 step. Place a city tile.',
      },
    });
  }
}
