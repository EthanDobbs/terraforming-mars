import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class LaserMining extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.LASER_MINING,
      tags: [Tag.SCIENCE],

      behavior: {
        production: {titanium: 1, heat: 1},
        stock: {heat: 3},
      },

      metadata: {
        cardNumber: 'xP19',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1).heat(1)).heat(3);
        }),
        description: 'Increase your titanium production 1 step and your heat production 1 step. Gain 3 heat.',
      },
    });
  }
}
