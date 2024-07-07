import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
export class PhobosSpacePort extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.PHOBOS_SPACE_PORT,
      tags: [Tag.SPACE],

      behavior: {
        production: {titanium: 1},
        colonies: {addTradeFleet: 1},
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'xP51',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.SPACE).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.titanium(1)).nbsp.tradeFleet();
        }),
        description: 'Increase your titanium production 1 step and gain a trade fleet.',
      },
    });
  }
}
