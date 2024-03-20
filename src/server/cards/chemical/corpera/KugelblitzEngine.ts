import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {played, digit} from '../../Options';

export class KugelblitzEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KUGELBLITZ_ENGINE,
      tags: [Tag.POWER, Tag.SCIENCE],
      cost: 17,
      requirements: {tag: Tag.SCIENCE, count: 6},
      victoryPoints: 1,

      behavior: {
        production: {energy: 6}
      },

      cardDiscount: {tag: Tag.SPACE, amount: 4},
      metadata: {
        cardNumber: 'x195',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 4 M€ less for it.', (eb) => {
            eb.space({played}).startEffect.megacredits(-4);
          }).br;
          b.production((pb) => pb.energy(6, {digit}));
        }),
        description: 'Requires 6 science tags. Increase your energy production 6 steps.',
      },
    });
  }
}
