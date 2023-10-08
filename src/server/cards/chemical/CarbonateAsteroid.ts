import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {Tag} from '../../../common/cards/Tag';

export class CarbonateAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CARBONATE_ASTEROID,
      tags: [Tag.SPACE],
      cost: 22,
      behavior: {
        global: {temperature: 1},
        production: {heat: 3},
        removeAnyPlants: 3,
      },

      metadata: {
        cardNumber: 'x015',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1);
          b.production((pb) => pb.heat(3, {digit})).nbsp;
          b.minus().plants(3, {all, digit});
        }),
        description: 'Raise the temperature 1 step and raise your heat production 3 steps. Remove up to 3 plants from any player.',
      },
    });
  }
}
