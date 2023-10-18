import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class IsotopeEnrichingBacteria extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ISOTOPE_ENRICHING_BACTERIA,
      cost: 7,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      requirements: {tag: Tag.MICROBE, count: 2},

      behavior: {
        production: {energy: 1},
        stock: {energy: 3},
      },

      metadata: {
        cardNumber: 'x154',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).energy(3);
        }),
        description: 'Requires that you have 2 microbe tags. Raise your energy production 1 step and gain 3 energy resources.',
      },
    });
  }
}
