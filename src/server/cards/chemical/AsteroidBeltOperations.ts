import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {ActivePreludeCard} from '../prelude2/ActivePreludeCard';
import {IProjectCard} from '../IProjectCard';
import { CardResource } from '../../../common/CardResource';

export class AsteroidBeltOperations extends ActivePreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.ASTEROID_BELT_OPERATIONS,
      tags: [Tag.SPACE],

      action: {
        or: {
          behaviors: [{
            stock: {titanium: 2},
            title: 'Gain 2 titanium',
          },
          {
            addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1},
            title: 'Add an asteroid to ANY card.',
          }],
          autoSelect: true,
        },
      },

      metadata: {
        cardNumber: 'xP17',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an asteroid to ANY card or gain 2 titanium.', (eb) => {
            eb.empty().startAction.asteroids(1).asterix().slash().titanium(2);
          }).br;
        }),
      },
    });
  }
}
