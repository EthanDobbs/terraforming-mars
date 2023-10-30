import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {played} from '../Options';

export class PhobosSpacePort extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.PHOBOS_SPACE_PORT,
      tags: [Tag.SPACE],

      behavior: {
        stock: {titanium: 3},
        colonies: {addTradeFleet: 1},
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'xP51',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.space({played}).startEffect.megacredits(-2);
          }).br;
          b.tradeFleet().titanium(3);
        }),
        description: 'Gain a trade fleet and 3 titanium.'
      },
    });
  }
}
