import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class VenusPowerPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUS_POWER_PLANT,
      tags: [Tag.POWER, Tag.VENUS],
      cost: 5,
      requirements: {venus: 10},

      behavior: {
        production: {energy: 2},
      },

      metadata: {
        cardNumber: 'x305',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2));
        }),
        description: 'Requires Venus 10% or higher. Raise your energy production 2 steps.',
      },
    });
  }
}
