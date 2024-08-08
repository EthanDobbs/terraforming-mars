import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {IProjectCard} from '../../IProjectCard';
import { PreludeCard } from '../../prelude/PreludeCard';

export class IndustryAllies extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.INDUSTRY_ALLIES,
      tags: [Tag.BUILDING, Tag.BUILDING],

      behavior: {
        production: {steel: 1, energy: 1, heat: 1},
      },

      metadata: {
        cardNumber: 'xP14',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1).energy(1).heat(1));
        }),
        description: 'Increase your steel, energy, and heat productions 1 step each.',
      },
    });
  }
}
