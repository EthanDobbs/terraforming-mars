import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {max} from '../Options';

export class EarlyExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MINOR_IMPACTOR,
      cost: 3,
      behavior: {
        stock: {plants: 2},
      },
      victoryPoints: 1,
      requirements: {oxygen: 3, max},

      metadata: {
        cardNumber: 'x028',
        renderData: CardRenderer.builder((b) => {
          b.plants(2);
        }),
        description: 'Requires 3% oxygen or lower. Gain 2 plants.',
      },
    });
  }
}
