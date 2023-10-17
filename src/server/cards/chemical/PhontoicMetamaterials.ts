import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { CardResource } from '../../../common/CardResource';

export class PhotonicMetamaterials extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PHOTONIC_METAMATERIALS,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 13,
      requirements: {tag: Tag.SCIENCE, count: 2},

      behavior: {
        global: {venus: 1},
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'x285',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).floaters(2, {secondaryTag: Tag.VENUS}).br;
        }),
        description: 'Raise Venus 1 step and add 2 floaters to any Venus card.',
      },
    });
  }
}
