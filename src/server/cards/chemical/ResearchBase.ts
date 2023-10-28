import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';

export class ResearchBase extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.RESEARCH_BASE,
      tags: [Tag.SCIENCE, Tag.CITY],

      behavior: {
        city: {},
        drawCard: 2,
        stock: {megacredits: -3},
      },

      metadata: {
        cardNumber: 'xP31',
        renderData: CardRenderer.builder((b) => {
          b.city().nbsp.megacredits(-3).nbsp.cards(2);
        }),
        description: 'Place a city tile, lose 3 M€, and draw 2 cards.'
      },
    });
  }
}
