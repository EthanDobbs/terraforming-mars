import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class LithiumMine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LITHIUM_MINE,
      cost: 20,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {steel: 1, energy: 1},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: 'x103',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1).energy(1)).nbsp.oxygen(1);
        }),
        description: 'Increase your steel production 1 step and your energy production 1 step. Raise the oxygen 1 step.',
      },
    });
  }
}
