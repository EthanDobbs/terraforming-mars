import {Tag} from '../../../../common/cards/Tag';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';

export class StandardAlloys extends Card {
  constructor() {
    super({
      name: CardName.STANDARD_ALLOYS,
      type: CardType.ACTIVE,
      tags: [Tag.BUILDING],
      cost: 3,

      metadata: {
        cardNumber: 'xB84',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a standard project, steel may be used as 2 M€ each.',
            (eb) => eb.plate('Standard projects').startEffect.steel(1).equals().megacredits(2)).br;
        }),
      },
    });
  }
}
