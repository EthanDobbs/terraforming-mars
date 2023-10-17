import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { ActionCard } from '../ActionCard';

export class PHNeutralizers extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.PH_NEUTRALIZERS,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE, Tag.MICROBE, Tag.VENUS],
      cost: 9,
      resourceType: CardResource.MICROBE,
      requirements: {venus: 6},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 2 microbes to raise your TR 1 step',
            spend: {resourcesHere: 2},
            tr: 1,
          },
          {
            title: 'Add 1 microbe to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x266',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 microbe to this card.', (eb) => {
            eb.empty().startAction.microbes(1);
          }).br;
          b.or().br;
          b.action('Remove 2 microbes from this card to raise your TR 1 step.', (eb) => {
            eb.microbes(2).startAction.tr(1);
          }).br;
        }),
        description: 'Requires Venus 6% or higher.',
      },
    });
  }
}
