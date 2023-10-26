import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class HemeraBunker extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HEMERA_BUNKER,
      cost: 21,
      tags: [Tag.SCIENCE, Tag.SPACE],
      requirements: {tag: Tag.SCIENCE, count: 3},
      victoryPoints: 2,

      behavior: {
        production: {titanium: 1},
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x367',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).cards(2);
        }),
        description: 'Requires 3 science tags. Increase your titanium production 1 step and draw 2 cards.',
      },
    });
  }
}
