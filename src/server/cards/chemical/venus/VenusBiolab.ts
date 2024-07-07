import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class VenusBiolab extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_BIOLAB,
      type: CardType.ACTIVE,
      tags: [Tag.MICROBE, Tag.ANIMAL, Tag.VENUS],
      cost: 10,
      requirements: {venus: 10},
      victoryPoints: 1,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 M€ to add 2 microbes to ANY card',
            spend: {megacredits: 2},
            addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
          },
          {
            title: 'Spend 2 M€ to add 1 animal to ANY card',
            spend: {megacredits: 2},
            addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x272',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to add 2 microbes or 1 animal to ANY card.', (eb) => {
            eb.megacredits(2).startAction.resource(CardResource.MICROBE, 2).asterix().slash().resource(CardResource.ANIMAL).asterix();
          }).br;
        }),
        description: 'Requires Venus 10%.',
      },
    });
  }
}
