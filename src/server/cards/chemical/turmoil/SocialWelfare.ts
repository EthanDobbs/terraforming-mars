import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {all} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';

export class SocialWelfare extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SOCIAL_WELFARE,
      cost: 6,
      requirements: {party: PartyName.MARS},
      victoryPoints: 1,

      behavior: {
        stock: {megacredits: {cities: {where: 'everywhere'}}},
      },

      metadata: {
        cardNumber: 'x416',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().city({all, size: Size.SMALL})
        }),
        description: 'Requires that Mars First are in power or that you have 2 delegates there. Gain 1 M€ for each city tile.'
      }
    })
  }
}
