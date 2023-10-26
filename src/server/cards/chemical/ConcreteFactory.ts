import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {digit} from '../Options';

export class ConcreteFactory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CONCRETE_FACTORY,
      cost: 12,
      tags: [Tag.BUILDING],

      behavior: {
        production: {steel: 1},
        stock: {steel: 4},
      },

      metadata: {
        cardNumber: 'x223',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1)).nbsp.steel(4, {digit});
        }),
        description: 'Increase your steel production 1 step and gain 4 steel.',
      },
    });
  }
}
