import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {digit} from '../Options';

export class HFCProduction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HFC_PRODUCTION,
      cost: 12,
      tags: [Tag.BUILDING],
      victoryPoints: -1,

      behavior: {
        production: {energy: -1, heat:5},
      },

      metadata: {
        cardNumber: 'x157',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().heat(5, {digit});
          });
        }),
        description: 'Decrease your energy production 1 step and increase your heat production 5 steps.',
      },
    });
  }
}
