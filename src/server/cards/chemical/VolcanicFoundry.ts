import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class VolcanicFoundry extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VOLCANIC_FOUNDRY,
      tags: [Tag.BUILDING],
      cost: 5,

      behavior: {
        production: {heat: -2, steel: 1, titanium: 1},
      },

      metadata: {
        cardNumber: 'x227',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().heat(2).br;
            pb.plus().steel(1).titanium(1);
          });
        }),
        description: 'Lower your heat production 2 steps, raise your steel produciton 1 step, and your titanium production 1 step.',
      },
    });
  }
}
