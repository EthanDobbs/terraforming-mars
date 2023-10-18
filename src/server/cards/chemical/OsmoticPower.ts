import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class OsmoticPower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.OSMOTIC_POWER,
      cost: 2,
      tags: [Tag.POWER, Tag.BUILDING],
      requirements: {oceans: 3},

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'x151',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1));
        }),
        description: 'Requires 3 or more oceans. Raise your energy production 1 step.',
      },
    });
  }
}
