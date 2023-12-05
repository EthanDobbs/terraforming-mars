import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class NearMissRotaryAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.NEAR_MISS_ROTARY_ASTEROID,
      tags: [Tag.SPACE],
      cost: 14,
      victoryPoints: 1,

      behavior: {
        global: {venus: 1},
        addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1}
      },

      metadata: {
        cardNumber: 'x242',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).nbsp.asteroids(1).asterix();
        }),
        description: 'Raise Venus 1 step and add an asteroid to ANOTHER card.',
      },
    });
  }
}
