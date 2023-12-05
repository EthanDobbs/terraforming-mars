import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class HugeAsteroidChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.HUGE_ASTEROID_CHEMICAL,

      behavior: {
        global: {temperature: 3},
      },

      metadata: {
        cardNumber: 'xR55',
        renderData: CardRenderer.builder((b) => {
          b.temperature(3);
        }),
        description: 'Increase temperature 3 steps.',
      },
    });
  }
}
