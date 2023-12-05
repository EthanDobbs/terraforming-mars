import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class SubcrustVaporTrapping extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SUBCRUST_VAPOR_TRAPPING,
      cost: 12,
      requirements: {tag: Tag.SCIENCE, count: 2},
      behavior: {
        ocean: {},
      },
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x023',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1);
        }),
        description: 'Requires 2 science tags. Place an ocean tile.',
      },
    });
  }
}
