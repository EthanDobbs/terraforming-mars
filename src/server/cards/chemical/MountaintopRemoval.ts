import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class MountaintopRemoval extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MOUNTAINTOP_REMOVAL,
      cost: 8,
      tags: [Tag.BUILDING],

      behavior: {
        production: {megacredits: -1, steel: 2},
      },

      metadata: {
        cardNumber: 'x224',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().megacredits(1).br;
            pb.plus().steel(2);
          });
        }),
        description: 'Lower your MC production 1 step and raise your steel production 2 steps.',
      },
    });
  }
}
