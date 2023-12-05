import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all, digit} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class GiantCarbonateAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.GIANT_CARBONATE_ASTEROID,
      tags: [Tag.SPACE],
      cost: 35,
      behavior: {
        global: {temperature: 2},
        production: {heat: 4},
        removeAnyPlants: 6,
      },

      metadata: {
        cardNumber: 'x014',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2);
          b.production((pb) => pb.heat(4, {digit})).nbsp;
          b.minus().plants(6, {all, digit});
        }),
        description: 'Raise the temperature 2 steps and increase your heat production 4 steps. Remove up to 6 plants from any player.',
      },
    });
  }
}
