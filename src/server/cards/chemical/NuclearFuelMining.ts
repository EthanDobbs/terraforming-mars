import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {Tag} from '../../../common/cards/Tag';
import {IProjectCard} from '../IProjectCard';

export class NuclearFuelMining extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.NUCLEAR_FUEL_MINING,
      tags: [Tag.EARTH],

      behavior: {
        stock: {megacredits: -2},
        production: {steel: 1, energy: 2},
      },

      metadata: {
        cardNumber: 'xP16',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1).energy(2)).megacredits(-2);
        }),
        description: 'Increase your steel production 1 step and your energy production 2 steps. Lose 2 M€.'
      },
    });
  }
}
