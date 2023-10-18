import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class SuperCarbonCollectors extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SUPER_CARBON_COLLECTORS,
      tags: [Tag.PLANT, Tag.VENUS],
      cost: 20,
      requirements: {venus: 20},
      victoryPoints: 1,

      behavior: {
        production: {plants: 1},
        global: {venus: 2},
      },

      metadata: {
        cardNumber: 'x292',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2)).venus(2).br;
        }),
        description: 'Requires Venus 20% or higher. Raise your plant production 2 steps and raise Venus 2 steps.',
      },
    });
  }
}
