import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Size} from '../../../common/cards/render/Size';

export class PowerCore extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.POWER_CORE,
      tags: [Tag.POWER],

      behavior: {
        production: {energy: 2},
        stock: {energy: 4},
        optionalEnergyConversion: true,
      },

      metadata: {
        cardNumber: 'xP25',
        renderData: CardRenderer.builder((b) => {
          b.text('EFFECT: CONVERTING ENERGY TO HEAT DURING PRODUCTION IS OPTIONAL FOR EACH ENERGY RESOURCE.', Size.SMALL).br;
          b.production((pb) => pb.energy(2)).br.energy(4);
        }),
        description: 'Increase your energy production 2 steps and gain 4 energy.'
      },
    });
  }
}
