import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MediaConglomerate extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MEDIA_CONGLOMARATE,
      tags: [Tag.EARTH],
      cost: 8,

      behavior: {
        production: {megacredits: 4},
      },

      requirements: {tag: Tag.EVENT, count: 5},
      metadata: {
        cardNumber: 'x209',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(4);
          });
        }),
        description: 'Requires that you\'ve played 5 event cards. Increase M€ production 4 steps.',
      },
    });
  }
}
