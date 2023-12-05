import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class IndependentSettlement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INDEPENDENT_SETTLEMENT,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 15,
      victoryPoints: 1,

      behavior: {
        city: {on: 'isolated'},
      },

      metadata: {
        cardNumber: 'x085',
        renderData: CardRenderer.builder((b) => {
          b.city().asterix();
        }),
        description: 'Place a city tile NEXT TO NO OTHER TILE.',
      },
    });
  }
}
