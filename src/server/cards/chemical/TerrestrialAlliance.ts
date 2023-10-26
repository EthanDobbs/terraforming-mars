import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class TerrestrialAlliance extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TERRESTRIAL_ALLIANCE,
      cost: 3,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}],

      behavior: {
        tr: 1,
      },

      metadata: {
        cardNumber: 'x306',
        renderData: CardRenderer.builder((b) => {
          b.tr(1);
        }),
        description: 'Requires an Earth tag and a Venus tag. Raise your TR 1 step.',
      },
    });
  }
}
