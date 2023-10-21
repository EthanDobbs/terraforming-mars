import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {digit} from '../Options';

export class AstronomicalClaim extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ASTRONOMICAL_CLAIM,
      cost: 18,
      requirements: {tag: Tag.SPACE, count: 5},
      victoryPoints: 2,

      behavior: {
        stock: {titanium: 4},
        addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1},
      },

      metadata: {
        cardNumber: 'x378',
        renderData: CardRenderer.builder((b) => {
          b.titanium(4, {digit}).nbsp.asteroids(1).asterix();
        }),
        description: 'Requires 5 space tags. Gain 4 titanium and add an asteroid to ANOTHER card.',
      },
    });
  }
}
