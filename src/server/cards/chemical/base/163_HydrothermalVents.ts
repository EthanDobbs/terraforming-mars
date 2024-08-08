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
      cost: 10,
      requirements: {oceans: 3},

      behavior: {
        production: {heat: 3},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'xB163',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(3)).resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Requires 3 ocean tiles. Increase your heat production 3 steps and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
