import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ColdFusionPower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COLD_FUSION_POWER,
      tags: [Tag.SCIENCE, Tag.POWER, Tag.BUILDING],
      cost: 16,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: 2,

      behavior: {
        production: {energy: 3},
      },

      metadata: {
        cardNumber: 'x234',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(3));
        }),
        description: 'Requires 4 science tags. Increase your energy production 3 steps.',
      },
    });
  }
}
