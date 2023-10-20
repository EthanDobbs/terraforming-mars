import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class FloaterFacility extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 6,
      tags: [Tag.BUILDING],
      name: CardName.FLOATER_FACILITY,
      type: CardType.ACTIVE,
      
      action:{
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Add a floater to ANY card',
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1,},
          },
          {
            title: 'gain 2MC',
            stock: {megacredits: 2},
          }],
        },
      },

      metadata: {
        cardNumber: 'x337',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to ANY card or gain 2MC.', (eb) => {
            eb.empty().startAction.floaters(1).asterix().nbsp.or().nbsp.megacredits(2);
          }).br;
        }),
      },
    });
  }
}
