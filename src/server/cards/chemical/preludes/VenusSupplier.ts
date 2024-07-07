import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardResource} from '../../../../common/CardResource';

export class VenusSupplier extends ActivePreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_SUPPLIER,
      tags: [Tag.POWER, Tag.VENUS],

      action: {
        or: {
          behaviors: [{
            stock: {megacredits: 2},
            title: 'Gain 2 M€',
          },
          {
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
            title: 'Add a floater to ANY card.',
          }],
          autoSelect: true,
        },
      },

      behavior: {
        production: {energy: 1},
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'xP38',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a floater to ANY card or gain 2 M€.', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER).asterix().slash().megacredits(2);
          }).br;
          b.venus(1).production((pb) => pb.energy(1));
        }),
        description: 'Raise Venus 1 step and increase your energy production 1 step.',
      },
    });
  }
}
