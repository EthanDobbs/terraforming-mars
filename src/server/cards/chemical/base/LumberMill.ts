import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';
import {Resource} from '../../../../common/Resource';

export class LumberMill extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUMBER_MILL,
      cost: 4,
      tags: [Tag.BUILDING],
      requirements: {greeneries: 3, all},

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'x099',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().plants(1, {all}).br;
            pb.plus().megacredits(2);
          });
        }),
        description: 'Requires any 3 greenery tiles. Decrease any player\'s plant production 1 step and increase your M€ production 2 steps.',
      },
    });
  }
}
