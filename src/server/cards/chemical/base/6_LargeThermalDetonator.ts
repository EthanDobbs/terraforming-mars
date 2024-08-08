import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class LargeThermalDetonator extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.LARGE_THERMAL_DETONATOR,
      cost: 24,
      behavior: {
        ocean: {},
        stock: {heat: 12},
      },

      metadata: {
        cardNumber: 'xB6',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).nbsp;
          b.heat(12, {digit});
        }),
        description: 'Place an ocean tile and gain 12 heat.',
      },
    });
  }
}
