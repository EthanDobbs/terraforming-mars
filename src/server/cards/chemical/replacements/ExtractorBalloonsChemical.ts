import {ActionCard} from '../../ActionCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {ICard} from '../../ICard';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';

export class ExtractorBalloonsChemical extends ActionCard implements ICard {
  constructor() {
    super({
      name: CardName.EXTRACTOR_BALLOONS_CHEMICAL,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 17,
      resourceType: CardResource.FLOATER,

      behavior: {
        addResources: 3,
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 2 floaters here to raise Venus 1 step.',
            spend: {resourcesHere: 2},
            global: {venus: 1},
          },
          {
            title: 'Add 1 floater to this card.',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'xR14',
        description: 'Add 3 floaters to this card',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to this card.', (eb) => {
            eb.empty().startAction.floaters(1);
          }).br;
          b.action('Remove 2 floaters here to raise Venus 1 step.', (eb) => {
            eb.or(Size.SMALL).floaters(2).startAction.venus(1);
          }).br.floaters(3);
        }),
      },
    });
  }
}
