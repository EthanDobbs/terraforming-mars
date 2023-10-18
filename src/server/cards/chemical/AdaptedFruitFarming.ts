import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class AdaptedFruitFarming extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ADAPTED_FRUIT_FARMING,
      cost: 17,
      tags: [Tag.PLANT],
      requirements: {temperature: 4},
      victoryPoints: 2,

      behavior: {
        production: {plants: 3, megacredits: 2},
        stock: {plants: 1},
      },

      metadata: {
        cardNumber: 'x127',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).br.plants(3)).plants(1);
        }),
        description: 'Requires +4°C or higher. Raise your MC production 2 steps, your plant production 3 steps, and gain 1 plant.',
      },
    });
  }
}
