import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class DeepBurrowSettlement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DEEP_BURROW_SETTLEMENT,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 23,

      behavior: {
        city: {},
        production: {energy: -1, steel: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'x088',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().steel(1).heat(2);
          });
          b.city();
        }),
        description: 'Decrease your energy production 1 step. Increase your steel production 1 step and your heat production 2 steps. Place a city tile.',
      },
    });
  }
}
