import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class PhobosMiningOperations extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PHOBOS_MINING_OPERATIONS,
      cost: 16,
      tags: [Tag.SPACE],
      victoryPoints: 1,

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'x106',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1));
        }),
        description: 'Raise your titanium production 1 step.',
      },
    });
  }
}
