import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class CarbonLatticeMicrobes extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CARBON_LATTICE_MICROBES,
      tags: [Tag.MICROBE],
      cost: 5,
      requirements: {tag: Tag.MICROBE, count: 1},
      resourceType: CardResource.MICROBE,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 microbe to gain 1 steel and 1 titanium',
            spend: {resourcesHere: 1},
            stock: {steel: 1, titanium: 1},
          },
          {
            title: 'Add a microbe to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'xB47',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE);
          }).br;
          b.or().br;
          b.action('Remove 1 microbe from this card to gain 1 steel and 1 titanium.', (eb) => {
            eb.resource(CardResource.MICROBE).startAction.steel(1).titanium(1);
          }).br;
        }),
        description: 'Requires 1 microbe tag.',
      },
    });
  }
}
