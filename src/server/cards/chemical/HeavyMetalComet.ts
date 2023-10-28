import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';

export class HeavyMetalComet extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.HEAVY_METAL_COMET,

      behavior: {
        stock: {steel: 3},
        ocean: {},
        global: {temperature: 1},
      },

      metadata: {
        cardNumber: 'xP13',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).oceans(1).steel(3);
        }),
        description: 'Raise the temperature 1 step, place an ocean tile, and gain 3 steel.'
      },
    });
  }
}
