import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';
import {Tag} from '../../../common/cards/Tag';

export class MartianResearchNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MARTIAN_RESEARCH_NETWORK,
      tags: [Tag.WILD],
      cost: 13,
      requirements: {party: PartyName.SCIENTISTS},

      cardDiscount: {amount: 1},

      metadata: {
        cardNumber: 'x398',
        renderData: CardRenderer.builder((b) => {
          b.effect('Whenever you play a card, you pay 1MC less for it.', (eb) => {
            eb.empty().startEffect.megacredits(-1);
          }).br;
        }),
        description: 'Requires that Scienctists are in power or that you have 2 delegates there.',
      },
    });
  }
}
