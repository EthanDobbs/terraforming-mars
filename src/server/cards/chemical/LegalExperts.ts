import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {all} from '../Options';

export class LegalExperts extends PreludeCard {
  constructor() {
    super({
      name: CardName.LEGAL_EXPERTS,
      tags: [Tag.EARTH],

      behavior: {
        stock: {megacredits: 14},
      },
      startingMegacredits: 14,

      metadata: {
        cardNumber: 'xP01',
        renderData: CardRenderer.builder((b) => {
          b.effect('When ANOTHER PLAYER removes your resources or lowers your production, steal 3 M€ from THAT PLAYER.',
            (eb) => eb.minus().wild(1).slash().production((pb) => pb.wild(1)).startEffect.text('Steal ').megacredits(3, {all}).asterix()).br;
          b.megacredits(14);
        }),
        description: 'Gain 14 M€.',
      },
    });
  }
}
