import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {played, digit} from '../../Options';

export class Kugelblitz extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KUGELBLITZ,
      tags: [Tag.POWER],
      cost: 18,
      requirements: {tag: Tag.SCIENCE, count: 6},
      victoryPoints: 2,

      behavior: {
        production: {energy: 6}
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'x195',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.space({played}).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.energy(6, {digit}));
        }),
        description: 'Requires 6 science tags. Increase your energy production 6 steps.',
      },
    });
  }
}
