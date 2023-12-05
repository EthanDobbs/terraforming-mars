import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class PolarIndustriesChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.POLAR_INDUSTRIES_CHEMICAL,
      tags: [Tag.BUILDING],

      behavior: {
        production: {heat: 2},
        ocean: {},
        stock: {megacredits: 7},
      },

      metadata: {
        cardNumber: 'xR54',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(2));
          b.oceans(1);
          b.megacredits(7)
        }),
        description: 'Increase your heat production 2 steps. Place an ocean tile. Gain 7 M€.',
      },
    });
  }
}
