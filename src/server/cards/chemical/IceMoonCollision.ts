import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {digit, all} from '../Options';

export class IceMoonCollision extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 28,
      name: CardName.ICE_MOON_COLLISION,
      type: CardType.EVENT,
      requirements: {tag: Tag.JOVIAN, count: 2},
      tags: [Tag.SPACE],

      behavior: {
        global: {temperature: 1},
        ocean: {count: 2},
        removeAnyPlants: 4,
      },

      metadata: {
        cardNumber: 'x323',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).oceans(2).minus().plants(4, {digit, all});
        }),
        description: 'Requires 2 Jovian tags. Raise the temperature 1 step, place 2 ocean tiles, and remove up to 4 plants from any player.',
      },
    });
  }
}