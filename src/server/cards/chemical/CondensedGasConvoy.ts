import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class CondensedGasConvoy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CONDENSED_GAS_CONVOY,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 18,

      behavior: {
        production: {heat: 2},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: 'x008',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(1).production((pb) => pb.heat(2));
        }),
        description: 'Raise the oxygen 1 step and your heat production 2 steps.',
      },
    });
  }
}
