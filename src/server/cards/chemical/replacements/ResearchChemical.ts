import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ResearchChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RESEARCH_CHEMICAL,
      tags: [Tag.SCIENCE, Tag.SCIENCE],
      cost: 14,
      victoryPoints: 1,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'xR35',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Counts as playing 2 science cards. Draw 2 cards.',
      },
    });
  }
}
