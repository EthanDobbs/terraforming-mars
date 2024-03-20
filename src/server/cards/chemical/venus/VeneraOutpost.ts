import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';

export class VeneraOutpost extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENERA_OUTPOST,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 18,
      requirements: {venus: 14},
      victoryPoints: 2,
      cardDiscount: {amount: 1},

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x270',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a card, you pay 1 M€ less for it.', (eb) => {
            eb.empty().startEffect.megacredits(-1);
          }).br;
          b.cards(2);
        }),
        description: 'Requires 14% Venus or higher. Draw 2 cards.',
      },
    });
  }
}
