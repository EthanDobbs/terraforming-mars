import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {digit} from '../../Options';

export class SeedSuppliers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SEED_SUPPLIERS,
      cost: 15,
      tags: [Tag.PLANT, Tag.EARTH],

      behavior: {
        production: {plants: 1},
        stock: {plants: 4},
      },

      metadata: {
        cardNumber: 'x231',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).nbsp.plants(4, {digit});
        }),
        description: 'Increase your plant production 1 step and gain 4 plants.',
      },
    });
  }
}
