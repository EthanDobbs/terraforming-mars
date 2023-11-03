import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class MoholeChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.MOHOLE_CHEMICAL,
      tags: [Tag.BUILDING],

      behavior: {
        production: {heat: 4},
        stock: {heat: 2},
      },

      metadata: {
        cardNumber: 'xR53',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(4, {digit})).nbsp.heat(2);
        }),
        description: 'Increase your heat production 4 steps. Gain 2 heat.',
      },
    });
  }
}
