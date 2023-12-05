import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class HydrogenBombardmentChemical extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.HYDROGEN_BOMBARDMENT_CHEMICAL,
      tags: [Tag.JOVIAN],

      behavior: {
        global: {venus: 1},
        production: {titanium: 1},
        stock: {megacredits: 5},
      },

      metadata: {
        cardNumber: 'xP36',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).production((pb) => pb.titanium(1)).megacredits(5);
        }),
        description: 'Raise Venus 1 step, increase your titanium production 1 step, and gain 5 M€.'
      },
    });
  }
}
