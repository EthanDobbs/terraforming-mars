import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class HydrocarbonSynthesis extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYDROCARBON_SYNTHESIS,
      cost: 18,
      tags: [Tag.POWER, Tag.BUILDING],
      victoryPoints: 1,

      behavior: {
        production: {energy: 2},
        stock: {energy: 2},
      },

      metadata: {
        cardNumber: 'xB144',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2)).energy(2);
        }),
        description: 'Increase your energy production 2 steps and gain 2 energy.',
      },
    });
  }
}
