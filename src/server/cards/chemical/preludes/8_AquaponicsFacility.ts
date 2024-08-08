import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class AquaponicsFacility extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.AQUAPONICS_FACILITY,
      tags: [Tag.ANIMAL, Tag.BUILDING],

      behavior: {
        stock: {megacredits: 3},
        production: {megacredits: 2},
        ocean: {},
      },
      startingMegacredits: 3,

      cardDiscount: {tag: Tag.ANIMAL, amount: 3},
      metadata: {
        cardNumber: 'xP8',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an animal card, you pay 3 M€ less for it.', (eb) => {
            eb.tag(Tag.ANIMAL).startEffect.megacredits(-3);
          }).br;
          b.production((pb) => pb.megacredits(2)).nbsp.megacredits(3).nbsp.oceans(1);
        }),
        description: 'Increase your M€ production 2 steps, gain 3 M€, and place an ocean tile.',
      },
    });
  }
}
