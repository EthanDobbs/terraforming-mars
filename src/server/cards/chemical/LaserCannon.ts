import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {all} from '../Options';

export class LaserCannon extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LASER_CANNON,
      cost: 13,
      tags: [Tag.SPACE],

      behavior: {
        production: {heat: 3},
        removeAnyPlants: 2,
      },

      metadata: {
        cardNumber: 'x159',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(3)).br.minus().plants(2, {all});
        }),
        description: 'Raise your heat production 3 steps and remove up to 2 plants from any player.',
      },
    });
  }
}
