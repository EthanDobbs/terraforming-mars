import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {Tag} from '../../../../common/cards/Tag';

export class InfrastructureSupport extends PreludeCard {
  constructor() {
    super({
      name: CardName.INFRASTRUCTURE_SUPPORT,
      tags: [Tag.BUILDING],

      behavior: {
        stock: {steel: 3},
        production: {megacredits: 2, steel: 1},
      },

      metadata: {
        cardNumber: 'xP15',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).steel(1)).steel(3);
        }),
        description: 'Increase your M€ production 1 step and you steel production 1 step. Gain 3 steel.',
      },
    });
  }
}
