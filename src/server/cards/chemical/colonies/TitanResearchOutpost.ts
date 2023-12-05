import {IActionCard} from '../../ICard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class TitanReseachOutpost extends ActionCard implements IActionCard {
  constructor() {
    super({
      name: CardName.TITAN_RESEARCH_OUTPOST,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE, Tag.JOVIAN],
      cost: 13,

      resourceType: CardResource.FLOATER,
      victoryPoints: {resourcesHere: {}, per: 3},

      behavior: {
        drawCard: 2,
      },

      action: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.JOVIAN, count: 1, autoSelect: true},
      },

      requirements: {tag: Tag.SCIENCE, count: 3},
      metadata: {
        cardNumber: 'x330',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to any Jovian card', (eb) => {
            eb.empty().startAction.floaters(1, {secondaryTag: Tag.JOVIAN});
          }).br;
          b.vpText('1 VP for every 3rd Floater on this card.').br;
          b.cards(2);
        }),
        description: 'Requires 3 science tags. Draw 2 cards.',
      },
    });
  }
}
