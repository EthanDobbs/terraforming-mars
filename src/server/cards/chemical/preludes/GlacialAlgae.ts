import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class GlacialAlgae extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.GLACIAL_ALGAE,
      tags: [Tag.PLANT],

      behavior: {
        ocean: {},
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xP20',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Place an ocean tile, increase your plant production 1 step, and gain 2 plants.',
      },
    });
  }
}
