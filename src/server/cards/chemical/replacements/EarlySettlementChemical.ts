import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class EarlySettlementChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.EARLY_SETTLEMENT_CHEMICAL,
      tags: [Tag.BUILDING, Tag.CITY],

      behavior: {
        production: {plants: 1},
        stock: {plants: 3},
        city: {},
      },

      metadata: {
        cardNumber: 'xR49',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(3).city();
        }),
        description: 'Increase your plant production 1 step and gain 3 plants. Place a city tile.',
      },
    });
  }
}
