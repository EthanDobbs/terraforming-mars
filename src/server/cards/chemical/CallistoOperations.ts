import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class CallistoOperations extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CALLISTO_OPERATIONS,
      cost: 22,
      tags: [Tag.JOVIAN, Tag.SPACE],

      behavior: {
        production: {titanium: 1},
        ocean: {},
      },

      metadata: {
        cardNumber: 'x107',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).nbsp.oceans(1);
        }),
        description: 'Increase your titanium production 1 step and place an ocean tile.',
      },
    });
  }
}
