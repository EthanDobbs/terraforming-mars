import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ImportedFuel extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.IMPORTED_FUEL,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 11,

      behavior: {
        production: {energy: 1, heat: 1},
        stock: {heat: 2},
      },

      metadata: {
        cardNumber: 'xB20',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).heat(1));
          b.nbsp.heat(2);
        }),
        description: 'Increase your energy production 1 step and your heat production 1 step. Gain 2 heat resources.',
      },
    });
  }
}
