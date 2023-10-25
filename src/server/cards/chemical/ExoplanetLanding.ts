import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';
import {Tag} from '../../../common/cards/Tag';

export class ExoplanetLanding extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EXOPLANET_LANDING,
      cost: 15,
      tags: [Tag.SCIENCE, Tag.SPACE],
      requirements: {party: PartyName.SCIENTISTS},
      victoryPoints: 2,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x417',
        renderData: CardRenderer.builder((b) => {
          b.cards(2);
        }),
        description: 'Requires that Scientists are in power or that you have 2 delegates there. Draw 2 cards.'
      }
    })
  }
}
