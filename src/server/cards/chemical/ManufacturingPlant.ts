import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ManufacturingPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MANUFACTURING_PLANT,
      tags: [Tag.BUILDING],
      cost: 7,

      behavior: {
        production: {steel: -1, megacredits: 4},
      },

      metadata: {
        cardNumber: 'x217',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().steel(1).br;
            pb.plus().megacredits(4);
          });
        }),
        description: 'Lower your steel production 1 step and raise your MC produciton 4 steps.',
      },
    });
  }
}
