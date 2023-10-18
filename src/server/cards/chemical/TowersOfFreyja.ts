import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {played} from '../Options';
//import {SpaceName} from '../../SpaceName';

export class TowersOfFreyja extends Card {
  constructor() {
    super({
      name: CardName.TOWERS_OF_FREYJA,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 18,
      requirements: {venus: 10},
      victoryPoints: 3,

      /*behavior: {
        city: {space: SpaceName.TOWERS_OF_FREYJA},
      },*/

      cardDiscount: {tag: Tag.VENUS, amount: 2},
      metadata: {
        cardNumber: 'x275',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a Venus card, you pay 2 M€ less for it.', (eb) => {
            eb.venus(1, {played}).startEffect.megacredits(-2);
          }).br;
          b.city().asterix();
        }),
        description: 'Requires 10% Venus or higher. Place a city tile ON THE RESERVED AREA'
      },
    });
  }
}
