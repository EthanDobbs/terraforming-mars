import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {max} from '../Options';

export class EarlyExpeditionChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.EARLY_EXPEDITION_CHEMICAL,
      cost: 6,
      behavior: {
        stock: {plants: 2},
      },
      victoryPoints: 1,
      requirements: {oxygen: 3, max},

      metadata: {
        cardNumber: 'x028',
        renderData: CardRenderer.builder((b) => {
          b.plants(2);
        }),
        description: 'Oxygen must be 3% or lower. Gain 2 plants.',
      },
    });
  }
}
