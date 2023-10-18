import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class Mixotrophs extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MIXOTROPHS,
      cost: 6,
      tags: [Tag.MICROBE],
      requirements: {tag: Tag.MICROBE, count: 1},

      behavior: {
        production: {plants: 1},
      },

      metadata: {
        cardNumber: 'x110',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1));
        }),
        description: 'Requires that you have a microbe tag. Raise your plant production 1 step.',
      },
    });
  }
}
