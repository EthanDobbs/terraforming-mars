import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class AcquiredResearchFirm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ACQUIRED_RESEARCH_FIRM,
      tags: [Tag.SCIENCE, Tag.EARTH],
      cost: 8,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x237',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Draw 2 cards.',
      },
    });
  }
}
