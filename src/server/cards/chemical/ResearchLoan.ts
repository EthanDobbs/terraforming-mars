import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {Tag} from '../../../common/cards/Tag';

export class ResearchLoan extends PreludeCard {
  constructor() {
    super({
      name: CardName.RESEARCH_LOAN,
      tags: [Tag.SCIENCE],

      behavior: {
        stock: {megacredits: 15},
        production: {megacredits: -1},
        drawCard: {count: 1, tag: Tag.SCIENCE}
      },
      startingMegacredits: 15,

      metadata: {
        cardNumber: 'xP03',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().megacredits(1)).nbsp.megacredits(15).nbsp.cards(1, {secondaryTag: Tag.SCIENCE});
        }),
        description: 'Decrease your M€ production 1 step and Gain 15 M€. Reveal cards until you reveal a card with a science tag. Take it into your hand, discard the rest.',
      },
    });
  }
}
