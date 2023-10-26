import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class InsulatedCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INSULATED_CITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 19,

      behavior: {
        city: {},
        production: {heat: -2, megacredits: 4},
      },

      metadata: {
        cardNumber: 'x089',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().heat(2).br;
            pb.plus().megacredits(4);
          })
          b.city();
        }),
        description: 'Decrease your heat production 2 steps and increase your M€ production 4 steps. Place a city tile.',
      },
    });
  }
}
