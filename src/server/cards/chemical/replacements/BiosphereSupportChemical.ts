import {Tag} from '../../../../common/cards/Tag';
import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class BiosphereSupportChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.BIOSPHERE_SUPPORT_CHEMICAL,
      tags: [Tag.PLANT],

      behavior: {
        production: {plants: 2},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xR48',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2)).plants(2);
        }),
        description: 'Increase your plant production 2 steps and gain 2 plants.',
      },
    });
  }
}

