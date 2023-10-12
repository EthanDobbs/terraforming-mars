import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import { played } from '../Options';

export class HeavyAerospaceTech extends Card {
  constructor() {
    super({
      name: CardName.HEAVY_AEROSPACE_TECH,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE],
      cost: 5,

      metadata: {
        cardNumber: 'x075',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a space tag, steel may be used as 2 M€ each.',
            (eb) => eb.space({played}).startEffect.steel(1).equals().megacredits(2)).br;
        }),
      },
    });
  }
}
