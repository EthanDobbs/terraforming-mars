import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class Shipyard extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SHIPYARD,
      cost: 13,
      tags: [Tag.BUILDING],

      behavior: {
        production: {titanium: 1},
        stock: {titanium: 2},
      },

      metadata: {
        cardNumber: 'x228',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).nbsp.titanium(2);
        }),
        description: 'Raise your titanium production 1 step and gain 2 titanium.',
      },
    });
  }
}
