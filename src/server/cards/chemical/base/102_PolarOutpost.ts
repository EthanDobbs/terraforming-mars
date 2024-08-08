import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class PolarOutpost extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.POLAR_OUTPOST,
      cost: 12,
      tags: [Tag.BUILDING],
      requirements: {temperature: -16, max: true},
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 1},
        stock: {heat: 2},
      },

      metadata: {
        cardNumber: 'xB102',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1)).nbsp.heat(2);
        }),
        description: 'Requires -16°C or colder. Increase your M€ production 1 step and gain 2 heat.',
      },
    });
  }
}
