import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';

export class FloatingTechResearch extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 10,
      name: CardName.FLOATING_TECH_RESEARCH,
      type: CardType.EVENT,

      behavior: {
        drawCard: 2,
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2},
      },

      metadata: {
        cardNumber: 'x320',
        renderData: CardRenderer.builder((b) => {
          b.floaters(2).asterix().nbsp.cards(2);
        }),
        description: 'Add 2 floaters to ANY card and draw 2 cards.',
      },
    });
  }
}
