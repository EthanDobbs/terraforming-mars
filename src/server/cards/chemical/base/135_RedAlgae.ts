import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class RedAlgae extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RED_ALGAE,
      cost: 10,
      tags: [Tag.PLANT],
      requirements: {oceans: 4},

      behavior: {
        production: {plants: 2},
      },

      metadata: {
        cardNumber: 'xB135',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2));
        }),
        description: 'Requires 4 ocean tiles. Increase your plant production 2 steps.',
      },
    });
  }
}
