import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';

export class EnergyBeam extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.ENERGY_BEAM,
      tags: [Tag.POWER],

      behavior: {
        production: {megacredits: -1, energy: 2, heat: 2},
      },

      metadata: {
        cardNumber: 'xP26',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(-1).energy(2).heat(2));
        }),
        description: 'Decrease your M€ production 1 step. Increase your energy production 2 steps and your heat production 2 steps.'
      },
    });
  }
}
