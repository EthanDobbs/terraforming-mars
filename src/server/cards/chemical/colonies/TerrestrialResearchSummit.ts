import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class TerrestrialResearchSummit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TERRESTRIAL_RESEARCH_SUMMIT,
      cost: 10,
      tags: [Tag.SCIENCE, Tag.EARTH],
      requirements: {tag: Tag.EARTH, count: 2},
      victoryPoints: 1,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x377',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Requires 2 Earth tags. Draw 2 cards.',
      },
    });
  }
}
