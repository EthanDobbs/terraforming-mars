import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class VenusTourism extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUS_TOURISM,
      tags: [Tag.EARTH, Tag.VENUS],
      cost: 6,
      requirements: {venus: 8},

      behavior: {
        production: {megacredits: {tag: Tag.VENUS}},
      },

      metadata: {
        cardNumber: 'x297',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1).slash().venus(1, {played});
          });
        }),
        description: 'Requires Venus 8% or higher. Increase your M€ production 1 step for each Venus tag you have.',
      },
    });
  }
}
