import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class ExplosiveMining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EXPLOSIVE_MINING,
      cost: 15,
      tags: [Tag.BUILDING],

      behavior: {
        production: {steel: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'x225',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.steel(1).br;
            pb.heat(2);
          });
        }),
        description: 'Raise your steel production 1 step and your heat production 2 steps.',
      },
    });
  }
}
