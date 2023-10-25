import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ReducedSnowCoverage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.REDUCED_SNOW_COVERAGE,
      cost: 1,
      requirements: {oceans: 2},

      behavior: {
        production: {heat: 1},
      },

      metadata: {
        cardNumber: 'x415',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(1));
        }),
        description: 'Requires 2 or more oceans. Raise your heat production 1 step.',
      },
    });
  }
}
