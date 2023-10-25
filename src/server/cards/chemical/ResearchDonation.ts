import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class ResearchDonation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.RESEARCH_DONATION,
      tags: [Tag.EARTH],
      cost: 11,

      behavior: {
        drawCard: 1,
        stock: {megacredits: {tag: Tag.SCIENCE, each: 2}}
      },

      metadata: {
        cardNumber: 'x178',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).nbsp.megacredits(2).slash().science(1, {played});
        }),
        description: 'Draw a card, and gain 2MC for each science tag you have.',
      },
    });
  }
}
