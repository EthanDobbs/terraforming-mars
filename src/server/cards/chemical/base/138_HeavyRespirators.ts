import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class HeavyRespirators extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HEAVY_RESPIRATORS,
      cost: 10,
      tags: [Tag.PLANT],
      requirements: {oxygen: 7},

      behavior: {
        greenery: {},
        global: {oxygen: -1},
      },

      metadata: {
        cardNumber: 'xB138',
        renderData: CardRenderer.builder((b) => {
          b.greenery({withO2: false}).asterix();
        }),
        description: 'Requires 7% oxygen. Place a greenery tile BUT DO NOT RAISE THE OXYGEN.',
      },
    });
  }
}
