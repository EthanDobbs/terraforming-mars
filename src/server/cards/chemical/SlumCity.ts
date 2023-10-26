import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SlumCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SLUM_CITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 12,
      victoryPoints: -1,

      behavior: {
        city: {},
        production: {energy: -1, megacredits: 2},
      },

      metadata: {
        cardNumber: 'x357',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          })
          b.city();
        }),
        description: 'Decrease your energy production 1 step and increase your M€ production 2 steps. Place a city tile.',
      },
    });
  }
}
