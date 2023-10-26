import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class NeuralEnhancers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.NEURAL_ENCHANCERS,
      tags: [Tag.SCIENCE],
      cost: 13,
      victoryPoints: 1,
      requirements: {tag: Tag.SCIENCE, count: 3},
      cardDiscount: {amount: 1},

      metadata: {
        cardNumber: 'x198',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a card, you pay 1 M€ less for it.', (eb) => {
            eb.empty().startEffect.megacredits(-1);
          });
        }),
        description: 'Requires 3 science tags.',
      },
    });
  }
}
