import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class MesosphereShades extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MESOSPHERE_SHADES,
      tags: [Tag.VENUS],
      cost: 10,
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
            title: 'Add 1 floater to ANY card',
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x258',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to ANY card.', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER).asterix();
          }).br;
          b.or().br;
          b.action('Remove 2 floaters from this card to raise Venus 1 step.', (eb) => {
            eb.resource(CardResource.FLOATER, 2).startAction.venus(1);
          }).br;
        }),
      },
    });
  }
}
