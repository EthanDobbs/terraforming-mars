import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class DomeFarmingChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.DOME_FARMING_CHEMICAL,
      tags: [Tag.PLANT, Tag.BUILDING],

      behavior: {
        production: {megacredits: 2, plants: 1},
        stock: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'xR50',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).plants(1)).megacredits(3);
        }),
        description: 'Increase your M€ production 2 steps and plant production 1 step. Gain 3 M€.',
      },
    });
  }
}
