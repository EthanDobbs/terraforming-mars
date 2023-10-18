import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class EnergyMohole extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ENERGY_MOHOLE,
      cost: 14,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {energy: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'x146',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.energy(1).br;
            pb.heat(2);
          });
        }),
        description: 'Raise your energy production 1 step and your heat production 2 steps.',
      },
    });
  }
}
