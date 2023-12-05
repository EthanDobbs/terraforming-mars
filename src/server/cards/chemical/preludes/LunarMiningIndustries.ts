import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {played} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class LunarMiningIndustries extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.LUNAR_MINING_INDUSTRIES,
      tags: [Tag.EARTH],

      behavior: {
        production: {titanium: 1},
      },

      cardDiscount: {tag: Tag.EARTH, amount: 3},
      metadata: {
        cardNumber: 'xP18',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth card, you pay 3 M€ less for it.', (eb) => {
            eb.earth(1, {played}).startEffect.megacredits(-3);
          }).br;
          b.production((pb) => pb.titanium(1))
        }),
        description: 'Increase your titanium production 1 step.'
      },
    });
  }
}
