import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class ExtremeNitrophiles extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EXTREME_NITROPHILES,
      cost: 13,
      tags: [Tag.PLANT],
      requirements: {temperature: -24},

      behavior: {
        production: {plants: 1},
        stock: {plants: 3},
      },

      metadata: {
        cardNumber: 'x114',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(3);
        }),
        description: 'Requires -24°C or higher. Raise your plant production 1 step and gain 3 plants.',
      },
    });
  }
}
