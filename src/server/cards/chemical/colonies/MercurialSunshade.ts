import { IProjectCard } from '../../IProjectCard';
import { Card } from '../../Card';
import { CardName } from '../../../../common/cards/CardName';
import { CardType } from '../../../../common/cards/CardType';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class MercurialSunshade extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MERCURIAL_SUNSHADE,
      cost: 24,
      tags: [Tag.SPACE],
      requirements: {tag: Tag.SCIENCE, count: 3},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x342',
        renderData: CardRenderer.builder((b) => {
          b.tr(3)
        }),
        description: "Requires 3 science tags. Raise your TR 3 steps."
      },
    });
  }
}
