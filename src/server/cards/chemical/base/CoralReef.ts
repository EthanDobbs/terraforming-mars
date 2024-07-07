import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class CoralReef extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CORAL_REEF,
      cost: 25,
      tags: [Tag.PLANT],
      requirements: {temperature: 6},
      victoryPoints: 2,

      behavior: {
        ocean: {},
        stock: {plants: 3},
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 1},
      },

      metadata: {
        cardNumber: 'x129',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).plants(3).resource(CardResource.ANIMAL).asterix();
        }),
        description: 'Requires +6°C or warmer. Place an ocean tile, gain 3 plants, and add an animal to ANOTHER card.',
      },
    });
  }
}
