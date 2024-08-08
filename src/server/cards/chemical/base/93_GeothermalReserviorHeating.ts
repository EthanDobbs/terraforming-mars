import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class GeothermalReserviorHeating extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GEOTHERMAL_RESERVIOR_HEATING,
      cost: 18,
      tags: [Tag.BUILDING],

      behavior: {
        ocean: {},
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'xB93',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).production((pb) => pb.megacredits(2));
        }),
        description: 'Place an ocean tile and increase your M€ production 2 steps.',
      },
    });
  }
}
