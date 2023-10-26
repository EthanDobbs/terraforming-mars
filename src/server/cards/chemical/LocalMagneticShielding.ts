import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class LocalMagneticShielding extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LOCAL_MAGNETIC_SHIELDING,
      tags: [Tag.VENUS],
      cost: 9,
      resourceType: CardResource.FLOATER,

      behavior: {
        addResources: 1,
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 floaters to raise your TR 1 step',
            spend: {resourcesHere: 2},
            tr: 1,
          },
          {
            title: 'Spend 2 M€ to add 1 floater to ANY card',
            spend: {megacredits: 2},
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x261',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to add 1 floater to ANY card.', (eb) => {
            eb.megacredits(2).startAction.floaters(1).asterix();
          }).br;
          b.or().br;
          b.action('Remove 2 floaters from this card to raise your TR 1 step.', (eb) => {
            eb.floaters(2).startAction.tr(1);
          }).br;
          b.floaters(1);
        }),
        description: "Add a floater to this card."
      },
    });
  }
}
