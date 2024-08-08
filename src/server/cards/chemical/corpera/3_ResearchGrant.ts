import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ResearchGrantChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.RESEARCH_GRANT_CHEMICAL,
      tags: [Tag.EARTH],
      cost: 7,

      behavior: {
        drawCard: 1,
        stock: {megacredits: {tag: Tag.SCIENCE, each: 2}},
      },

      metadata: {
        cardNumber: 'xCE3',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).nbsp.megacredits(2).slash().tag(Tag.SCIENCE);
        }),
        description: 'Draw a card and gain 2 M€ for each science tag you have.',
      },
    });
  }
}
