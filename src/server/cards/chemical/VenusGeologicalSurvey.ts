import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class VenusGeologicalSurvey extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUS_GEOLOGICAL_SURVEY,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 11,
      requirements: {tag: Tag.VENUS, count: 1},
      victoryPoints: 1,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x312',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Requires that you have a Venus tag. Draw 2 cards',
      },
    });
  }
}
