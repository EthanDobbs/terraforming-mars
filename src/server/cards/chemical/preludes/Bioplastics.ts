import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';

export class Bioplastics extends ActivePreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.BIOPLASTICS,
      tags: [Tag.MICROBE],

      behavior: {
        stock: {steel: 2, plants: 3},
      },

      action: {
        spend: {plants: 1},
        stock: {steel: 3},
      },

      metadata: {
        cardNumber: 'xP14',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 plant to gain 3 steel.', (eb) => {
            eb.plants(1).startAction.steel(3);
          }).br;
          b.steel(2).plants(3);
        }),
        description: 'Gain 2 steel and 3 plants.'
      },
    });
  }
}
