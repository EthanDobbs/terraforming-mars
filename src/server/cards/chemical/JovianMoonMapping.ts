import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class JovianMoonMapping extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 8,
      name: CardName.JOVIAN_MOON_MAPPING,
      type: CardType.EVENT,
      requirements: {tag: Tag.JOVIAN, count: 1},
      tags: [Tag.JOVIAN],
      victoryPoints: 1,

      behavior: {
        stock: {titanium: 2},
      },

      metadata: {
        cardNumber: 'x322',
        renderData: CardRenderer.builder((b) => {
          b.titanium(2);
        }),
        description: 'Requires 1 Jovian tag. Gain 2 titanium.',
      },
    });
  }
}
