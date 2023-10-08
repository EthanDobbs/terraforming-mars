import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {Tag} from '../../../common/cards/Tag';

export class TitaniumComet extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.TITANIUM_COMET,
      tags: [Tag.SPACE],
      cost: 28,
      behavior: {
        global: {temperature: 1},
        ocean: {},
        stock: {titanium: 3},
        removeAnyPlants: 3,
      },

      metadata: {
        cardNumber: 'x013',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1);
          b.oceans(1).nbsp;
          b.titanium(3, {digit}).nbsp;
          b.minus().plants(5, {all, digit});
        }),
        description: 'Raise the temperature 1 step, place an ocean tile, and gain 3 titanium. Remove up to 3 plants from any player.',
      },
    });
  }
}
