import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class AnaerobicEnergyCropping extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ANAEROBIC_ENERGY_CROPPING,
      cost: 14,
      tags: [Tag.POWER, Tag.PLANT],
      requirements: {temperature: -10},

      behavior: {
        production: {plants: 1, energy: 2},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x120',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).energy(2)).plants(2);
        }),
        description: 'Requires -10°C or higher. Raise your plant production 1 step, your energy production 2 steps, and gain 2 plants.',
      },
    });
  }
}
