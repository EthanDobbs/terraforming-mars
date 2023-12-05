import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class CommitteeCoalition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.COMMITTEE_COALITION,
      cost: 4,

      metadata: {
        cardNumber: 'x401',
        renderData: CardRenderer.builder((b) => {
          b.effect('If you have a party leader in a NON-DOMINANT PARTY, you have +1 influence.',
            (eb) => eb.partyLeaders(1).asterix().nbsp.startEffect.nbsp.plus().influence())
        }),
      },
    });
  }
  //effect handled in Turmoil.ts
}
