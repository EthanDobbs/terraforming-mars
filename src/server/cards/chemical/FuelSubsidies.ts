import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class FuelSubsidies extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.COLONY_SUPPLIERS,
      tags: [Tag.EARTH],
      cost: 3,
      requirements: {tag: Tag.EARTH, count: 2},

      behavior: {
        stock: {energy: 2},
      },

      metadata: {
        cardNumber: 'x341',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you trade, you pay 5MC less.', (eb) => {
            eb.trade().startEffect.megacredits(-5);
          }).br;
          b.energy(2);
        }),
        description: 'Requires 2 Earth tags. Gain 2 energy.'
      },
    });
  }
}
