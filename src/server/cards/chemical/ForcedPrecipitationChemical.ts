import {IActionCard} from '../ICard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class ForcedPrecipitationChemical extends ActionCard implements IActionCard {
  constructor() {
    super({
      name: CardName.FORCED_PRECIPITATION_CHEMICAL,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 4,
      resourceType: CardResource.FLOATER,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 floaters to raise Venus 1 step',
            spend: {resourcesHere: 2},
            global: {venus: 1},
          },
          {
            title: 'Spend 2 M€ to add 1 floater to ANY card',
            spend: {megacredits: 2},
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'xR12',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to add 1 floater to ANY card.', (eb) => {
            eb.megacredits(2).startAction.floaters(1);
          }).br;
          b.or().br;
          b.action('Spend 2 floaters here to increase Venus 1 step.', (eb) => {
            eb.floaters(2).startAction.venus(1);
          });
        }),
      },
    });
  }
}
