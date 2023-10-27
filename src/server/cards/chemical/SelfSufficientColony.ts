import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class SelfSufficientColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SELF_SUFFICIENT_COLONY,
      tags: [Tag.SPACE],
      cost: 26,
      victoryPoints: 2,

      behavior: {
        production: {energy: -1, megacredits: 2},
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x351',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          }).colonies(1);
        }),
        description: 'Decrease your energy production 1 step, increase your M€ production 2 steps, and place a colony.',
      },
    });
  }
}
