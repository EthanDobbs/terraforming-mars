import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';

export class UndergroundTestSite extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.UNDERGROUND_TEST_SITE,
      tags: [Tag. SCIENCE, Tag.BUILDING],
      cost: 12,

      behavior: {
        drawCard: 2,
      },

      action: {
        spend: {energy: 2},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'xCE34',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 energy to draw a card.', (eb) => {
            eb.energy(2).startAction.cards(1);
          }).br;
          b.cards(2);
        }),
        description: 'Draw 2 cards.',
      },
    });
  }
}
