import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class HighOrbitResearchStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HIGH_ORBIT_RESEARCH_STATION,
      cost: 12,
      tags: [Tag.SCIENCE, Tag.SPACE],
      requirements: {tag: Tag.SPACE, count: 5},
      victoryPoints: 2,

      behavior: {
        production: {energy: -1},
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x376',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(1)).cards(2);
        }),
        description: 'Requires 5 space tags. Lower your energy production 1 step and draw 2 cards.',
      },
    });
  }
}
