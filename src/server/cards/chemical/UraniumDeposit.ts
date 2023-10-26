import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class UraniumDeposit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.URANIUM_DEPOSIT,
      cost: 8,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {energy: 1},
        stock: {steel: 2},
      },

      metadata: {
        cardNumber: 'x142',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).steel(2);
        }),
        description: 'Increase your energy production 1 step and gain 2 steel.',
      },
    });
  }
}
