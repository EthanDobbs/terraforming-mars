import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class WormsChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WORMS_CHEMICAL,
      tags: [Tag.MICROBE],
      cost: 6,

      behavior: {
        production: {plants: {tag: Tag.MICROBE, per: 2}},
      },

      requirements: {oxygen: 4},
      metadata: {
        cardNumber: 'xR32',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).slash().microbes(2, {played}));
        }),
        description: 'Requires 3% oxygen. Increase your plant production 1 step for every 2 microbe tags you have, including this.',
      },
    });
  }
}
