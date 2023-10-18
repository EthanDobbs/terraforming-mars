import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class Bamboo extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BAMBOO,
      cost: 14,
      tags: [Tag.PLANT],
      requirements: {temperature: -16},

      behavior: {
        production: {plants: 2},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x116',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2)).plants(2);
        }),
        description: 'Requires -16°C or higher. Raise your plant production 2 steps and gain 2 plants.',
      },
    });
  }
}
