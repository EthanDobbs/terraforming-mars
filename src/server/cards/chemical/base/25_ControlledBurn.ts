import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all, digit} from '../../Options';

export class ControlledBurn extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CONTROLLED_BURN,
      cost: 1,
      requirements: {oxygen: 6},
      behavior: {
        stock: {heat: 3},
        removeAnyPlants: 3,
      },

      metadata: {
        cardNumber: 'xB25',
        renderData: CardRenderer.builder((b) => {
          b.heat(3, {digit}).nbsp;
          b.minus().plants(3, {all});
        }),
        description: 'Gain 3 heat. Remove up to 3 plants from any player.',
      },
    });
  }
}
