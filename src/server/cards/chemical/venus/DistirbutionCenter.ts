import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class DistributionCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DISTRIBUTION_CENTER,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 18,
      requirements: {uniqueTags: {}, count: 9},

      behavior: {
        production: {megacredits: 5, energy: 2},
        city: {},
      },

      metadata: {
        cardNumber: 'x295',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().megacredits(5);
          }).nbsp;
          b.city();
        }),
        description: 'Requires that you have 9 unique tags in play. Decrease your energy production 2 steps and increase your M€ production 5 steps. Place a city tile.',
      },
    });
  }
}
