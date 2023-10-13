import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ScientificSupport extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SCIENTIFIC_SUPPORT,
      tags: [Tag.EARTH],
      cost: 2,

      behavior: {
        production: {megacredits: 2},
      },

      requirements: {tag: Tag.SCIENCE, count: 2},
      metadata: {
        cardNumber: 'x207',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(2);
          });
        }),
        description: 'Requires 2 science tags. Increase M€ production 2 steps.',
      },
    });
  }
}
