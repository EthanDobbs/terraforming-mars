import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {Resource} from '../../../../common/Resource';
import {all} from '../../Options';

export class MarketSiphon extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 2,
      name: CardName.MARKET_SIPHON,
      type: CardType.EVENT,
      tags: [Tag.EARTH],
      requirements: {tag: Tag.EARTH, count: 1},

      behavior: {
        decreaseAnyProduction: {type: Resource.MEGACREDITS, count: 1},
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'x318',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).nbsp.megacredits(-1, {all}))
        }),
        description: 'Requires 1 Earth tag. Increase your M€ production 1 step and decrease any players M€ production 1 step.',
      },
    });
  }
}
