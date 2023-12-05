import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {played} from '../../Options';

export class EnergyLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ENERGY_LAB,
      tags: [Tag.SCIENCE, Tag.POWER],
      cost: 6,

      behavior: {
        stock: {energy: 3},
      },

      metadata: {
        cardNumber: 'x399',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a power tag, energy may be used as 2 M€ each.',
            (eb) => eb.energy(1, {played}).startEffect.energy(1).equals().megacredits(2)).br;
          b.energy(3);
        }),
        description: 'Gain 3 energy',
      },
    });
  }
}
