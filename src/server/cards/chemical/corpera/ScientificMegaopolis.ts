import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';

export class ScientificMegaopolis extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SCIENTIFIC_MEGAOPOLIS,
      tags: [Tag.SCIENCE, Tag.CITY, Tag.BUILDING],
      cost: 32,

      behavior: {
        city: {},
      },

      action: {
        spend: {energy: 2},
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x192',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 energy to draw 2 cards.', (eb) => {
            eb.energy(2).startAction.cards(2);
          }).br;
          b.city();
        }),
        description: 'Place a city tile.',
      },
    });
  }
}
