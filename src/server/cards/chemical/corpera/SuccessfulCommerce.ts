import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class SuccessfulCommerce extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SUCCESSFUL_COMMERCE,
      tags: [Tag.EARTH],
      cost: 8,

      behavior: {
        production: {megacredits: 3},
      },

      requirements: {tag: Tag.EARTH, count: 2},
      metadata: {
        cardNumber: 'x206',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(3);
          });
        }),
        description: 'Requires 2 Earth tags. Increase your M€ production 3 steps.',
      },
    });
  }
}
