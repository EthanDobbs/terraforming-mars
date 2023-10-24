import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SolarStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SOLAR_STATION,
      tags: [Tag.SPACE],
      cost: 11,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 2},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x363',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2));
          b.cards(1)
        }),
        description: 'Requires 4 science tags. Raise your MC production 2 steps and draw a card.',
      },
    });
  }
}
