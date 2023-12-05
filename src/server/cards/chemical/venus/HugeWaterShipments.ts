import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class HugeWaterShipments extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HUGE_WATER_SHIPMENTS,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 36,

      behavior: {
        global: {venus: 2},
        ocean: {count: 2},
      },

      metadata: {
        cardNumber: 'x245',
        renderData: CardRenderer.builder((b) => {
          b.venus(2).oceans(2);
        }),
        description: 'Raise Venus 2 steps and place 2 ocean tiles.',
      },
    });
  }
}
