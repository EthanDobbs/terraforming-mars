import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class CarbonFixingMicrobes extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.CARBON_FIXING_MICROBES,
      type: CardType.ACTIVE,
      tags: [Tag.MICROBE, Tag.VENUS],
      cost: 4,
      resourceType: CardResource.MICROBE,
      requirements: {venus: 10},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 microbes to raise Venus 1 step',
            spend: {resourcesHere: 2},
            global: {venus: 1},
          },
          {
            title: 'Spend 1 M€ to add 1 microbe to this card',
            spend: {megacredits: 1},
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x267',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 M€ to add 1 microbe to this card.', (eb) => {
            eb.megacredits(1).startAction.microbes(1);
          }).br;
          b.or().br;
          b.action('Remove 2 microbes From this card to raise Venus 1 step.', (eb) => {
            eb.microbes(2).startAction.venus(1);
          }).br;
        }),
        description: 'Requires Venus 10%.',
      },
    });
  }
}
