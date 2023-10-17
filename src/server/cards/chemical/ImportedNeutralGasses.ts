import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { CardResource } from '../../../common/CardResource';

export class ImportedNeutralGasses extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.IMPORTED_NEUTRAL_GASSES,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 12,

      behavior: {
        global: {venus: 1},
        addResourcesToAnyCard: [{type: CardResource.MICROBE, tag: Tag.VENUS, count: 2, autoSelect: true}, {type: CardResource.ANIMAL, tag: Tag.VENUS, count: 1, autoSelect: true}]
      },

      metadata: {
        cardNumber: 'x246',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).microbes(2, {secondaryTag: Tag.VENUS}).animals(1, {secondaryTag: Tag.VENUS});
        }),
        description: 'Raise Venus 1 step, add 2 microbes to any Venus card, and 1 animal to any Venus card.',
      },
    });
  }
}
