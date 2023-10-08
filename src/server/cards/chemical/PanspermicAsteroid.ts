import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class PanspermicAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PANSPERMIC_ASTEROID,
      tags: [Tag.SPACE],
      cost: 25,
      victoryPoints: 1,

      behavior: {
        addResourcesToAnyCard: [
          {type: CardResource.MICROBE, count: 3},
          {type: CardResource.ASTEROID, count: 1},
        ],
      },

      metadata: {
        cardNumber: 'x010',
        renderData: CardRenderer.builder((b) => {
          b.asteroids(1).asterix().nbsp;
          b.microbes(3, {digit}).asterix();
        }),
        description: 'Add 1 asteorid to ANOTHER card and 3 microbes to ANOTHER card.',
      },
    });
  }
}
