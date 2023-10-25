import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class HighPowerBetavoltaics extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HIGH_POWER_BETAVOLTAICS,
      cost: 5,
      tags: [Tag.POWER],
      requirements: {tag: Tag.SCIENCE, count: 2},
      victoryPoints: 1,

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'x149',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1));
        }),
        description: 'Requires that you have 2 science tags. Raise your energy production 1 step.',
      },
    });
  }
}
