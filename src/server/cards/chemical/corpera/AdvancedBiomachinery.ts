import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class AdvancedBiomachinery extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ADVANCED_BIOMACHINERY,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 10,
      victoryPoints: 1,
      resourceType: CardResource.MICROBE,
      requirements: {tag: Tag.MICROBE, count: 2},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 microbe to draw a card',
            spend: {resourcesHere: 1},
            drawCard: 1,
          },
          {
            title: 'Add a microbe to ANY card',
            addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1}
          }],
        },
      },

      metadata: {
        cardNumber: 'x186',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to ANY card.', (eb) => {
            eb.empty().startAction.microbes(1).asterix();
          }).br;
          b.or().br;
          b.action('Spend 1 microbe here to draw a card.', (eb) => {
            eb.microbes(1).startAction.cards(1);
          }).br;
        }),
        description: 'Requires 2 microbe tags.'
      },
    });
  }
}
