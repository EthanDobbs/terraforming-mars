import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class RuralHousing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RURAL_HOUSING,
      cost: 9,
      tags: [Tag.BUILDING],
      requirements: {oxygen: 12},
      victoryPoints: 1,

      behavior: {
        stock: {megacredits: {greeneries: {}, all: false}},
      },

      metadata: {
        cardNumber: 'xB103',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().greenery({withO2: false});
        }),
        description: 'Requires 12% oxygen. Gain 1 M€ for each greenery tile you own.',
      },
    });
  }
}
