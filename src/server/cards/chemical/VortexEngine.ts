import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class VortexEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VORTEX_ENGINE,
      tags: [Tag.VENUS],
      cost: 12,

      behavior: {
        global: {venus: 2},
        production: {megacredits: -1},
      },

      metadata: {
        cardNumber: 'x284',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(-1)).nbsp.venus(2).br;
        }),
        description: 'Lower your MC production 1 step and raise Venus 2 steps.',
      },
    });
  }
}
