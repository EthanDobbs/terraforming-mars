import {Tag} from '../../../../common/cards/Tag';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {played} from '../../Options';
//import {SpaceName} from '../../SpaceName';

export class VenusSolarWaystation extends Card {
  constructor() {
    super({
      name: CardName.VENUS_SOLAR_WAYSTATION,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS, Tag.SPACE],
      cost: 18,
      requirements: {tag: Tag.VENUS, count: 2},
      victoryPoints: 2,

      behavior: {
        production: {titanium: 1}
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'x276',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.space({played}).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.titanium(1))
        }),
        description: 'Requires that you have 2 Venus tags. Increase your titanium production 1 step.'
      },
    });
  }
}
