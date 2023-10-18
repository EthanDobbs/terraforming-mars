import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class Cacti extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CACTI,
      cost: 3,
      tags: [Tag.PLANT],
      requirements: {temperature: 2},

      behavior: {
        production: {plants: 1},
        stock: {plants: 1},
      },

      metadata: {
        cardNumber: 'x126',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(1);
        }),
        description: 'Requires +2°C or higher. Raise your plant production 1 step and gain 1 plant.',
      },
    });
  }
}
