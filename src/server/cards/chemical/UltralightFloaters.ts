import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';

export class UltralightFloaters extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ULTRALIGHT_FLOATERS,
      tags: [Tag.VENUS],
      cost: 1,
      requirements: {venus: 6},

      behavior: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.VENUS, count: 2, autoSelect: true}
      },

      metadata: {
        cardNumber: 'x250',
        renderData: CardRenderer.builder((b) => {
          b.floaters(2, {secondaryTag: Tag.VENUS});
        }),
        description: 'Requires Venus 6% or higher. Add 2 floaters to any Venus card.',
      },
    });
  }
}
