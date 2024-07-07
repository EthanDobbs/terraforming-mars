import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class KugelblitzEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KUGELBLITZ_ENGINE,
      tags: [Tag.POWER, Tag.SCIENCE],
      cost: 20,
      requirements: {tag: Tag.POWER, count: 4},
      victoryPoints: 2,

      behavior: {
        production: {energy: 4},
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'x195',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.SPACE).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.energy(4, {digit}));
        }),
        description: 'Requires 4 power tags. Increase your energy production 4 steps.',
      },
    });
  }
}
