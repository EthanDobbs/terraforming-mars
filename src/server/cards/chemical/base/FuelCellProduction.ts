import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class FuelCellProduction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FUEL_CELL_PRODUCTION,
      cost: 4,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {megacredits: -2, energy: 2},
      },

      metadata: {
        cardNumber: 'x145',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().megacredits(2).br;
            pb.plus().energy(2);
          });
        }),
        description: 'Decrease your M€ production 2 steps and increase your energy production 2 steps.',
      },
    });
  }
}
