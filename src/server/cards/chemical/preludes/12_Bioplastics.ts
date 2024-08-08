import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';

export class Bioplastics extends ActivePreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.BIOPLASTICS,
      tags: [Tag.MICROBE],

      behavior: {
        production: {steel: 2},
        stock: {steel: 2, plants: 2},
      },

      metadata: {
        cardNumber: 'xP12',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(2)).br;
          b.steel(2).plants(2);
        }),
        description: 'Increase your steel production 2 steps, gain 2 steel, and gain 2 plants.',
      },
    });
  }
}
