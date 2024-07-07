import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';

export class InaugurationCeremony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.INAUGURATION_CEREMONY,
      cost: 5,
      requirements: {chairman: {}},
      victoryPoints: 1,

      behavior: {
        stock: {megacredits: {cities: {where: 'everywhere'}, all: true, per: 2}},
      },

      metadata: {
        cardNumber: 'x389',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().city({all, size: Size.SMALL}).city({all, size: Size.SMALL});
        }),
        description: 'Requires you are chairman. Gain 1 M€ for every 2 cities in play.',
      },
    });
  }
}
