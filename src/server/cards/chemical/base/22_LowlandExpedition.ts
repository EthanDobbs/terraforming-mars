import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {max} from '../../Options';

export class LowlandExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.LOWLAND_EXPEDITION,
      cost: 6,
      behavior: {
        stock: {plants: 2},
      },
      victoryPoints: 1,
      requirements: {oceans: 3, max},

      metadata: {
        cardNumber: 'xB22',
        renderData: CardRenderer.builder((b) => {
          b.plants(2);
        }),
        description: 'Requires 3 oceans or fewer. Gain 2 plants.',
      },
    });
  }
}
