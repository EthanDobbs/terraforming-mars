import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class VascularTundraPlants extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VASCULAR_TUNDRA_PLANTS,
      cost: 10,
      tags: [Tag.PLANT],
      requirements: {temperature: -18},

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x115',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Requires -18°C or higher. Raise your plant production 1 step and gain 2 plants.',
      },
    });
  }
}
