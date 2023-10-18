import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {all} from '../Options';
export class PopulationBoom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.POPULATION_BOOM,
      cost: 3,
      requirements: {cities: 6, all},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x179',
        description: 'Requires that there are 6 cities in play.',
      },
    });
  }
}
