import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class AdaptedHardwood extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ADAPTED_HARDWOOD,
      cost: 22,
      tags: [Tag.PLANT],
      requirements: {temperature: -10},

      behavior: {
        production: {plants: 3, megacredits: 3},
      },

      metadata: {
        cardNumber: 'x121',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3).br.plants(3));
        }),
        description: 'Requires -10°C or higher. Raise your MC production 3 steps and your plant production 3 steps.',
      },
    });
  }
}
