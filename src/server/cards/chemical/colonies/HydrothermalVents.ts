import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {CardResource} from '../../../../common/CardResource';

export class HydrothermalVents extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYDROTHERMAL_VENTS,
      cost: 6,
      requirements: {oceans: 4},

      behavior: {
        production: {heat: 2},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'x374',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(2)).nbsp.resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Requires 4 ocean tiles. Increase your heat production 2 steps and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
