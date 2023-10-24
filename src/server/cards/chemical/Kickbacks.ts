import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Kickbacks extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KICKBACKS,
      cost: 1,
      requirements: {chairman: {}},
      victoryPoints: -1,

      behavior: {
        stock: {megacredits: 3},
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'x403',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).megacredits(3);
        }),
        description: 'Requires you are chairman. Raise your MC production 2 steps and gain 3MC.',
      },
    });
  }
}
