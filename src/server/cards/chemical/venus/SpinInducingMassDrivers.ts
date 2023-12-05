import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {digit} from '../../Options';

export class SpinInducingMassDrivers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SPIN_INDUCING_MASS_DRIVERS,
      tags: [Tag.VENUS],
      cost: 12,
      requirements: {venus: 18},
      victoryPoints: 2,

      behavior: {
        global: {venus: 1},
        production: {energy: -3},
      },

      metadata: {
        cardNumber: 'x290',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(3, {digit})).nbsp.venus(1).br;
        }),
        description: 'Requires Venus 18%. Decrease your energy production 3 steps. Raise Venus 1 step.',
      },
    });
  }
}
