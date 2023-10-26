import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SpaceTethers extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPACE_TETHERS,
      tags: [Tag.SPACE],
      cost: 11,
      resourceType: CardResource.FLOATER,
      victoryPoints: 1,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 floater to gain 4 M€',
            spend: {resourcesHere: 1},
            stock: {megacredits: 4},
          },
          {
            title: 'Add 1 floater to ANY card',
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x327',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to ANY card.', (eb) => {
            eb.empty().startAction.floaters(1).asterix();
          }).br;
          b.or().br;
          b.action('Remove 1 floater from this card to gain 4 M€.', (eb) => {
            eb.floaters(1).startAction.megacredits(4);
          }).br;
        }),
      },
    });
  }
}
