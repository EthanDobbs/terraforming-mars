import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class AnaerobicEnergyCropping extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ANAEROBIC_ENERGY_CROPPING,
      cost: 12,
      tags: [Tag.POWER, Tag.PLANT],
      requirements: {temperature: -10},

      behavior: {
        production: {plants: 1, energy: 2},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xB123',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).energy(2)).plants(2);
        }),
        description: 'Requires -10°C or warmer. Increase your plant production 1 step and your energy production 2 steps. Gain 2 plants.',
      },
    });
  }
}
