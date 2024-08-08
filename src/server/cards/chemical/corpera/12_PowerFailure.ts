import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';

export class PowerFailure extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.POWER_FAILURE,
      cost: 1,

      behavior: {
        decreaseAnyProduction: {type: Resource.ENERGY, count: 1},
      },

      metadata: {
        cardNumber: 'xCE12',
        description: 'Decrease any energy production 1 step.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1, {all});
          });
        }),
      },
    });
  }
}
