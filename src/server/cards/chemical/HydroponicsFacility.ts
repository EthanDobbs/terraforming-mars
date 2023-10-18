import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class HydroponicsFacility extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYDROPONICS_FACILITY,
      cost: 10,
      tags: [Tag.PLANT, Tag.BUILDING],
      requirements: {oceans: 3},

      behavior: {
        production: {plants: 1, megacredits: 1},
      },

      metadata: {
        cardNumber: 'x131',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).plants(1));
        }),
        description: 'Requires 3 or more oceans. Raise your MC production 1 step and your plant production 1 step.',
      },
    });
  }
}
