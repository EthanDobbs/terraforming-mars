import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class VenusMiningExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.VENUS_MINING_EXPEDITION,
      tags: [Tag.VENUS],
      cost: 9,
      requirements: {venus: 8},

      behavior: {
        stock: {steel: 5, titanium: 2},
      },

      metadata: {
        cardNumber: 'x249',
        renderData: CardRenderer.builder((b) => {
          b.steel(5, {digit}).nbsp.titanium(2, {digit});
        }),
        description: 'Requires Venus 8% or higher. Gain 5 steel and 2 titanium.',
      },
    });
  }
}
