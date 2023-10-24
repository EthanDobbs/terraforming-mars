import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';

export class FusionBombing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.FUSION_BOMBING,
      cost: 12,
      requirements: {party: PartyName.KELVINISTS},

      behavior: {
        global: {temperature: 2},
      },

      metadata: {
        cardNumber: 'x386',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2);
        }),
        description: 'Requires that Kelvinists are in power or that you have 2 delegates there. Raise the temperature 2 steps.',
      },
    });
  }
}
