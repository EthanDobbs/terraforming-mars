import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class SocietySupportChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.SOCIETY_SUPPORT_CHEMICAL,
      tags: [Tag.WILD],

      behavior: {
        production: {plants: 1, energy: 1, heat: 1, megacredits: -1},
      },

      metadata: {
        cardNumber: 'xR52',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(-1).plants(1).br;
            pb.energy(1).heat(1);
          });
        }),
        description: 'Increase your plant, energy and heat production 1 step. Decrease M€ production 1 step. After being played, when you perform an action, the wild tag counts as any tag of your choice.',
      },
    });
  }
}
