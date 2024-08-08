import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import { Tag } from '../../../../common/cards/Tag';

export class HermesMission extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HERMES_MISSION,
      cost: 6,
      tags: [Tag.SPACE],
      requirements: {tag: Tag.SCIENCE, count: 2},

      behavior: {
        stock: {titanium: 2},
        drawCard: {count: 2, tag: Tag.SPACE},
      },

      metadata: {
        cardNumber: 'xCE5',
        description: 'Gain 2 titanium and draw 2 cards with space tags.',
        renderData: CardRenderer.builder((b) => {
          b.titanium(2).cards(2, {secondaryTag: Tag.SPACE});
        }),
      },
    });
  }
}
