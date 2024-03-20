import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class UNMISponsorship extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.UNMI_SPONSORSHIP,
      cost: 11,
      tags: [Tag.EARTH],
      requirements: {raisedTR: true},

      metadata: {
        cardNumber: 'x342',
        renderData: CardRenderer.builder((b) => {
          b.tr(2)
        }),
        description: "Requires you've raised your TR this generation. Raise your TR 2 steps."
      },
    });
  }
}
