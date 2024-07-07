import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {digit} from '../../Options';

export class CarbonateDeposit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CARBONATE_DEPOSIT,
      cost: 5,
      tags: [Tag.BUILDING],

      behavior: {
        production: {energy: -1, heat: 2},
        stock: {heat: 4},
      },

      metadata: {
        cardNumber: 'x156',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().heat(2);
          }).nbsp;
          b.heat(4, {digit});
        }),
        description: 'Decrease your energy production 1 step, increase your heat production 2 steps, and gain 4 heat.',
      },
    });
  }
}
