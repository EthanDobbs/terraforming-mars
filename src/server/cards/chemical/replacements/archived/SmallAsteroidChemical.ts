import {IProjectCard} from '../../../IProjectCard';
import {Card} from '../../../Card';
import {CardName} from '../../../../../common/cards/CardName';
import {CardType} from '../../../../../common/cards/CardType';
import {Tag} from '../../../../../common/cards/Tag';
import {CardRenderer} from '../../../render/CardRenderer';
import {all} from '../../../Options';

export class SmallAsteroidChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SMALL_ASTEROID_CHEMICAL,
      tags: [Tag.SPACE],
      cost: 7,

      behavior: {
        global: {temperature: 1},
        removeAnyPlants: 2,
      },

      metadata: {
        cardNumber: 'xR03',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).br;
          b.minus().plants(2, {all});
        }),
        description: 'Increase temperature 1 step. Remove up to 2 plants from any player.',
      },
    });
  }
}
