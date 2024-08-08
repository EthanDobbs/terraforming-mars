import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';

export class ParasiticPlants extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PARASITIC_PLANTS,
      cost: 4,
      tags: [Tag.PLANT],
      requirements: {temperature: -14},

      behavior: {
        production: {plants: 1},
        removeAnyPlants: 2,
      },

      metadata: {
        cardNumber: 'x159',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).nbsp.minus().plants(2, {all});
        }),
        description: 'Increase your plant production 1 step and remove up to 2 plants from any player.',
      },
    });
  }
}
