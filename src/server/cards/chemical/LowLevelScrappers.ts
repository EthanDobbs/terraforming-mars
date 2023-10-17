import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class LowLevelScrappers extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LOW_LEVEL_SCRAPPERS,
      tags: [Tag.VENUS],
      cost: 5,
      resourceType: CardResource.FLOATER,
      requirements: {venus: 10},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 2 floaters to raise Venus 1 step',
            spend: {resourcesHere: 2},
            global: {venus: 1},
          },
          {
            title: 'Spend 2 energy to add 2 floaters to this card',
            spend: {energy: 2},
            addResources: 2,
          }],
        },
      },

      metadata: {
        cardNumber: 'x259',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 energy to add 2 floaters to this card.', (eb) => {
            eb.energy(2).startAction.floaters(2);
          }).br;
          b.or().br;
          b.action('Remove 2 floaters from this card to raise Venus 1 step.', (eb) => {
            eb.floaters(2).startAction.venus(1);
          }).br;
        }),
        description: 'Requires Venus 10% or higher',
      },
    });
  }
}
