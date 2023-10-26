import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Macroplankton extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MACROPLANKTON,
      tags: [Tag.MICROBE],
      cost: 8,
      requirements: {temperature: -14},
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 4},

      behavior: {
        stock: {plants: 2}
      },

      action: {
        addResources: 2,
      },

      metadata: {
        cardNumber: 'x043',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 microbes to this card.', (eb) => {
            eb.empty().startAction.microbes(2);
          }).br;
          b.vpText('1 VP per 4 Microbes on this card.').br;
          b.plants(2);
        }),
        description: 'Requires -14°C or warmer. Gain 2 plants.'
      },
    });
  }
}
