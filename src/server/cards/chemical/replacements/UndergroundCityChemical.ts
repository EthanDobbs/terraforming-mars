import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class UndergroundCityChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.UNDERGROUND_CITY_CHEMICAL,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 15,

      behavior: {
        production: {energy: -2, steel: 2},
        city: {},
      },

      metadata: {
        cardNumber: 'xR29',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().steel(2);
          }).nbsp.city();
        }),
        description: 'Place a city tile. Decrease your energy production 2 steps and increase your steel production 2 steps.',
      },
    });
  }
}
