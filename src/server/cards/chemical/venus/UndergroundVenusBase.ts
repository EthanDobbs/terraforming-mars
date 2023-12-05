import {Tag} from '../../../../common/cards/Tag';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {played} from '../../Options';

export class UndergroundVenusBase extends Card {
  constructor() {
    super({
      name: CardName.UNDERGROUND_VENUS_BASE,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 13,
      requirements: {venus: 6},
      victoryPoints: 2,

      behavior: {
        production: {steel: 1},
      },

      metadata: {
        cardNumber: 'x274',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a Venus tag, steel may be used as 2 M€ each.',
            (eb) => eb.venus(1, {played}).startEffect.steel(1).equals().megacredits(2)).br;
          b.production((pb) => pb.steel(1))
        }),
        description: 'Requires 6% Venus or higher. Increase your steel production 1 step.'
      },
    });
  }
}
