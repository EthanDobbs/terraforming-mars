import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class EarlyColony extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.EARLY_COLONY,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}},
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'xP40',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).nbsp.production((pb) => pb.megacredits(1));
        }),
        description: 'Place a colony and increase your M€ production 1 step.',
      },
    });
  }
}
