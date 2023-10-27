import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class ResearchColonyChemical extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 22,
      tags: [Tag.SPACE, Tag.SCIENCE],
      name: CardName.RESEARCH_COLONY_CHEMICAL,
      type: CardType.AUTOMATED,

      behavior: {
        drawCard: 2,
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'xR39',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).nbsp.cards(2);
        }),
        description: 'Place a colony. Draw 2 cards.',
      },
    });
  }
}
