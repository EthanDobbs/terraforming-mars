import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class HomeworldHeadquarters extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.HOMEWORLD_HEADQUARTERS,
      tags: [Tag.EARTH],
      cost: 18,

      behavior: {
        production: {megacredits: 4},
      },

      cardDiscount: {tag: Tag.EARTH, amount: 3},
      metadata: {
        cardNumber: 'xCE21',
        description: 'Increase your M€ production 4 steps.',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, you pay 3 M€ less for it.', (eb) => {
            eb.tag(Tag.EARTH).startEffect.megacredits(-3);
          }).br;
          b.production((pb) => pb.megacredits(4));
        }),
      },
    });
  }
}
