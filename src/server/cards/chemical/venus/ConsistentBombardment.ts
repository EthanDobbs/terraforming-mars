import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ConsistentBombardment extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CONSISTENT_BOMBARDMENT,
      tags: [Tag.SPACE],
      cost: 12,
      resourceType: CardResource.ASTEROID,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 asteroid to raise the temperature.',
            spend: {resourcesHere: 1},
            global: {temperature: 1},
          },
          {
            title: 'Spend 1 asteroid to raise Venus.',
            spend: {resourcesHere: 1},
            global: {venus: 1},
          },
          {
            title: 'Spend 1 titanium to add 1 asteroid to ANY card',
            spend: {titanium: 1},
            addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x253',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 titanium to add 1 asteroid to ANY card.', (eb) => {
            eb.titanium(1).startAction.resource(CardResource.ASTEROID).asterix();
          }).br;
          b.or().br;
          b.action('Remove 1 asteroid from this card to raise the temperature or Venus 1 step.', (eb) => {
            eb.resource(CardResource.ASTEROID).startAction.temperature(1).slash().venus(1);
          }).br;
        }),
      },
    });
  }
}
