import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class AtmosphericSolarCollectors extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ATMOSPHERIC_SOLAR_COLLECTORS,
      tags: [Tag.POWER, Tag.VENUS],
      cost: 14,

      behavior: {
        global: {venus: 1},
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'x282',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).nbsp.venus(1).br;
        }),
        description: 'Increase your energy production 1 step and raise Venus 1 step.',
      },
    });
  }
}
