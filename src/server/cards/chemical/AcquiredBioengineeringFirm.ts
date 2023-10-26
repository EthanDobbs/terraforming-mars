import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';

export class AcquiredBioengineeringFirm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ACQUIRED_BIOENGINEERING_FIRM,
      cost: 8,
      tags: [Tag.PLANT, Tag.EARTH],
      requirements: {party: PartyName.GREENS},

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x413',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plants(1);
          }).plants(2);
        }),
        description: 'Requires that Greens are in power or that you have 2 delegates there. Increase your plant production 1 step and gain 2 plants.',
      },
    });
  }
}
