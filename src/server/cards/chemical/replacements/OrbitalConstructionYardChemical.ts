import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class OrbitalConstructionYardChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.ORBITAL_CONSTRUCTION_YARD_CHEMICAL,
      tags: [Tag.SPACE],

      behavior: {
        production: {titanium: 1},
        stock: {titanium: 5},
      },

      metadata: {
        cardNumber: 'xR46',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).nbsp.titanium(5, {digit});
        }),
        description: 'Increase your titanium production 1 step. Gain 5 titanium.',
      },
    });
  }
}
