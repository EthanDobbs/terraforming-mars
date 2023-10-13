import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class InterstellarProbe extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INTERSTELLAR_PROBE,
      tags: [Tag.SCIENCE, Tag.SPACE],
      cost: 8,
      requirements: {tag: Tag.SCIENCE, count: 3},
      victoryPoints: 1,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x238',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Requires that you have 3 science tags. Draw 2 cards.',
      },
    });
  }
}
