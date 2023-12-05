import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class OzoneFactories extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.OZONE_FACTORIES,
      cost: 16,
      tags: [Tag.BUILDING],
      requirements: {oxygen: 6},

      behavior: {
        production: {heat: 1},
        tr: 2,
      },

      metadata: {
        cardNumber: 'x161',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(1)).tr(2);
        }),
        description: 'Requires 6% oxygen. Increase your heat production 1 step and raise your TR 2 steps.',
      },
    });
  }
}
