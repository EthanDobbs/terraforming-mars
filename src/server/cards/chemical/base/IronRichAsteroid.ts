import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class IronRichAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.IRON_RICH_ASTEROID,
      tags: [Tag.SPACE],
      cost: 13,
      behavior: {
        global: {temperature: 1},
        stock: {steel: 3},
        removeAnyPlants: 2,
      },

      metadata: {
        cardNumber: 'x017',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).nbsp;
          b.steel(3).br;
          b.minus().plants(2, {all});
        }),
        description: 'Raise the temperature 1 step and gain 3 steel. Remove up to 2 plants from any player.',
      },
    });
  }
}
