import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ThallophyteProtists extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.THALLOPHYTE_PROTISTS,
      tags: [Tag.MICROBE],
      cost: 12,
      requirements: {temperature: -24},
      resourceType: CardResource.MICROBE,

      behavior: {
        addResources: 2,
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 microbes to raise your plant production 1 step',
            spend: {resourcesHere: 2},
            production: {plants: 1},
          },
          {
            title: 'Add a microbe to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x046',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to this card.', (eb) => {
            eb.empty().startAction.microbes(1);
          }).br;
          b.or().br;
          b.action('Remove 2 microbes from this card to raise your plant production one step.', (eb) => {
            eb.microbes(2).startAction.production((pb) => pb.plants(1));
          }).br;
          b.microbes(2);
        }),
        description: 'Requires -24°C or warmer. Add 2 microbes to this card.'
      },
    });
  }
}
