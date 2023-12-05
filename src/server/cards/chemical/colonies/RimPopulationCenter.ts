import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class RimPopulationCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RIM_POPULATION_CENTER,
      tags: [Tag.SPACE],
      cost: 7,

      behavior: {
        production: {energy: -1},
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x349',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(1)).colonies(1);
        }),
        description: 'Decrease your energy production 1 step and place a colony.',
      },
    });
  }
}
