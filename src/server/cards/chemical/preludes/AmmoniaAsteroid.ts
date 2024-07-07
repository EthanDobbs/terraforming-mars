import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';

export class AmmoniaAsteroid extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.AMMONIA_ASTEROID,

      behavior: {
        global: {temperature: 1},
        production: {plants: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'xP21',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).production((pb) => pb.plants(1).heat(2));
        }),
        description: 'Raise the temperature 1 step. Increase your plant production 1 step and your heat production 2 steps.',
      },
    });
  }
}
