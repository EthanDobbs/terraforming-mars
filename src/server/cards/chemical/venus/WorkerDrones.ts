import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class WorkerDrones extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WORKER_DRONES,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 8,

      behavior: {
        addResourcesToAnyCard: {
          tag: Tag.VENUS,
          count: 2,
          autoSelect: true,
          mustHaveCard: false,
        },
      },

      metadata: {
        cardNumber: 'x309',
        renderData: CardRenderer.builder((b) => {
          b.wild(2, {secondaryTag: Tag.VENUS});
        }),
        description: 'Add any 2 resources to a Venus card.',
      },
    });
  }
}
