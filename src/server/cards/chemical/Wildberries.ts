import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class Wildberries extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WILDBERRIES,
      cost: 9,
      tags: [Tag.PLANT],
      requirements: {temperature: -12},

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 1},
      },

      metadata: {
        cardNumber: 'x119',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(2).animals(1).asterix();
        }),
        description: 'Requires -12°C or warmer. Increase your plant production 1 step, gain 2 plants, and add an animal to ANOTHER card.',
      },
    });
  }
}
