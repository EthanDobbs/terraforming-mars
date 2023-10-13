import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ContractedConstruction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CONTRACTED_CONSTRUCTION,
      tags: [Tag.BUILDING],
      cost: 9,
      requirements: {tag: Tag.BUILDING, count: 5},

      behavior: {
        production: {steel: -1, megacredits: 5},
      },

      metadata: {
        cardNumber: 'x218',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().steel(1).br;
            pb.plus().megacredits(5);
          });
        }),
        description: 'Require that you have 5 building tags. Lower your steel production 1 step and raise your MC produciton 5 steps.',
      },
    });
  }
}
