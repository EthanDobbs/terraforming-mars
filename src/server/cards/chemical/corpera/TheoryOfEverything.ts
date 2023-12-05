import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class TheoryOfEverything extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.THEORY_OF_EVERYTHING,
      tags: [Tag.SCIENCE, Tag.SCIENCE],
      cost: 25,
      requirements: {tag: Tag.SCIENCE, count: 7},
      victoryPoints: 5,

      behavior: {
        drawCard: 3,
      },

      metadata: {
        cardNumber: 'x239',
        renderData: CardRenderer.builder((b) => {
          b.cards(3);
        }),
        description: 'Requires 7 science tags. Playing this card counts as playing 2 science cards. Draw 3 cards.',
      },
    });
  }
}
