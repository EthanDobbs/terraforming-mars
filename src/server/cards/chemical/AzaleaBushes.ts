import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class AzaleaBushes extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.AZALEA_BUSHES,
      cost: 7,
      tags: [Tag.PLANT],
      requirements: {temperature: -6},
      victoryPoints: 1,

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x369',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Requires -6°C or warmer. Increase your plant production 1 step and gain 2 plants.',
      },
    });
  }
}
