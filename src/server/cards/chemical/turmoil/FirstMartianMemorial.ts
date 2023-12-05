import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class FirstMaritanMemorial extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FIRST_MARTIAN_MEMORIAL,
      cost: 5,
      tags: [Tag.BUILDING],
      requirements: {chairman: {}},
      victoryPoints: 1,

      behavior: {
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x418',
        renderData: CardRenderer.builder((b) => {
          b.cards(1);
        }),
        description: 'Requires that you are chairman. Draw a card.'
      }
    })
  }
}
