import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class BotanicalLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BOTANICAL_LAB,
      cost: 8,
      tags: [Tag.PLANT, Tag.BUILDING],
      requirements: {tag: Tag.SCIENCE, count: 2},
      victoryPoints: 1,

      behavior: {
        production: {plants: 1},
      },

      metadata: {
        cardNumber: 'xB115',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1));
        }),
        description: 'Requires 2 science tags. Increase your plant production 1 step.',
      },
    });
  }
}
