import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class MartianThermophiles extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MARTIAN_THERMOPHILES,
      tags: [Tag.MICROBE],
      cost: 4,
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 3},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 heat to add 1 microbe to this card',
            spend: {heat: 1},
            addResources: 1,
          },
          {
            title: 'Spend 4 heat to add 2 microbes to this card',
            spend: {heat: 4},
            addResources: 2,
          }],
        },
      },

      metadata: {
        cardNumber: 'xB40',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 heat to add 1 microbe to this card.', (eb) => {
            eb.heat(1).startAction.resource(CardResource.MICROBE);
          }).br;
          b.or().br;
          b.action('Spend 4 heat to add 2 microbes to this card.', (eb) => {
            eb.heat(4, {digit}).startAction.resource(CardResource.MICROBE, 2);
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
        }),
      },
    });
  }
}
