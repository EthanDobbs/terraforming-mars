import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {max} from '../../Options';

export class HugeGlacier extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HUGE_GLACIER,
      cost: 26,
      requirements: {temperature: -10, max},
      victoryPoints: 1,

      behavior: {
        ocean: {count: 2},
      },

      metadata: {
        cardNumber: 'x093',
        renderData: CardRenderer.builder((b) => {
          b.oceans(2);
        }),
        description: 'Requires -10°C or colder. Place 2 ocean tiles.',
      },
    });
  }
}
