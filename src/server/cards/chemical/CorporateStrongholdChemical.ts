import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class CorporateStrongholdChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CORPORATE_STRONGHOLD_CHEMICAL,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 11,

      behavior: {
        production: {energy: -1, megacredits: 4},
        city: {},
      },
      victoryPoints: -2,

      metadata: {
        cardNumber: 'xR37',
        description: 'Decrease your energy production 1 step and increase your M€ production 4 steps. Place a city tile.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(4);
          }).nbsp.nbsp.city();
        }),
      },
    });
  }
}
