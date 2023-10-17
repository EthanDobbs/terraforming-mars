import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class FloatingResearchBase extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FLOATING_RESEARCH_BASE,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 14,
      victoryPoints: {resourcesHere: {}, per: 3},
      requirements: {tag: Tag.SCIENCE, count: 2},
      resourceType: CardResource.FLOATER,

      behavior: {
        drawCard: 2,
      },

      action: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
      },

      metadata: {
        cardNumber: 'x256',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a floater to ANY card.', (eb) => {
            eb.empty().startAction.floaters(1).asterix();
          }).br;
          b.vpText('1 VP per 3 floaters on this card.').br;
          b.cards(2);
        }),
        description: 'Requires that you have 2 science tags. Draw 2 cards.',
      },
    });
  }
}
