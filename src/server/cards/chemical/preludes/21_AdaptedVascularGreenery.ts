import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class AdaptedVascularGreenery extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.ADAPTED_VASCULAR_GREENERY,
      tags: [Tag.PLANT],

      behavior: {
        production: {plants: 1},
        stock: {plants: 3},
        global: {oxygen: 1},
      },

      cardDiscount: {tag: Tag.PLANT, amount: 2},
      metadata: {
        cardNumber: 'xP21',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a plant card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.PLANT).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.plants(1)).plants(3).oxygen(1);
        }),
        description: 'Increase your plant production 1 step, gain 3 plants, and raise the oxygan 1 step.',
      },
    });
  }
}
