import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class ChasmaExcavation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CHASMA_EXCAVATION,
      cost: 12,
      tags: [Tag.BUILDING],
      victoryPoints: 1,
      requirements: {oceans: 3, max: true},

      behavior: {
        production: {steel: 1},
        stock: {steel: 2},
      },

      metadata: {
        cardNumber: 'x104',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1)).nbsp.steel(2);
        }),
        description: 'Requires 3 oceans or fewer. Raise your steel production 1 step and gain 2 steel resources.',
      },
    });
  }
}
