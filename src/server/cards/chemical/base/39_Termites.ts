import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class Termites extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TERMITES,
      tags: [Tag.MICROBE],
      cost: 10,
      requirements: {oxygen: 4},
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 2},

      behavior: {
        production: {heat: 1},
      },

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'xB39',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 microbe to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE);
          }).br;
          b.vpText('1 VP per 2 Microbes on this card.').br;
          b.production((pb) => pb.heat(1));
        }),
        description: 'Requires 4% oxygen. Increase your heat production 1 step.',
      },
    });
  }
}
