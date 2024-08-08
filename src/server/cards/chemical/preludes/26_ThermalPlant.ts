import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class ThermalPlant extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.THERMAL_PLANT,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {energy: 1, heat: 2},
        stock: {megacredits: 5},
      },
      startingMegacredits: 5,

      metadata: {
        cardNumber: 'xP26',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).heat(2)).megacredits(5);
        }),
        description: 'Increase your energy production 1 step and your heat production 2 steps. Gain 5 M€',
      },
    });
  }
}
