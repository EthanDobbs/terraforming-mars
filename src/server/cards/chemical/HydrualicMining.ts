import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class HydrualicMining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYDRUALIC_MINING,
      cost: 8,
      tags: [Tag.BUILDING],
      requirements: {oceans: 3},

      behavior: {
        production: {titanium: 1},
        stock: {steel: 2},
      },

      metadata: {
        cardNumber: 'x229',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).nbsp.steel(2);
        }),
        description: 'Requires 3 or more oceans. Raise your titanium production 1 step and gain 2 steel.',
      },
    });
  }
}
