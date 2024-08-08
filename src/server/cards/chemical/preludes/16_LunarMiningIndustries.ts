import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class LunarMiningIndustries extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.LUNAR_MINING_INDUSTRIES,
      tags: [Tag.EARTH],

      behavior: {
        production: {titanium: 1},
        stock: {steel: 2},
      },

      cardDiscount: {tag: Tag.EARTH, amount: 3},
      metadata: {
        cardNumber: 'xP16',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth card, you pay 3 M€ less for it.', (eb) => {
            eb.tag(Tag.EARTH).startEffect.megacredits(-3);
          }).br;
          b.production((pb) => pb.titanium(1)).steel(2);
        }),
        description: 'Increase your titanium production 1 step and gain 2 steel.',
      },
    });
  }
}
