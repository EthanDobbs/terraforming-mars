import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class ThisAtmosphereFloaters extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.THIN_ATMOSPHERE_FLOATERS,
      cost: 5,
      tags: [Tag.SCIENCE],
      requirements: {tag: Tag.SCIENCE, count: 3},
      victoryPoints: 1,

      behavior: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
      },

      metadata: {
        cardNumber: 'x380',
        renderData: CardRenderer.builder((b) => {
          b.floaters(1).asterix();
        }),
        description: 'Requires 3 science tags. Add a floater to ANOTHER card.',
      },
    });
  }
}
