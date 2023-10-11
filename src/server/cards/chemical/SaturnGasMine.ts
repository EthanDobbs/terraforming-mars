import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class SaturnGasMine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SATURN_GAS_MINE,
      cost: 25,
      tags: [Tag.JOVIAN, Tag.POWER, Tag.SPACE],
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 2, energy: 1},
      },

      metadata: {
        cardNumber: 'x137',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).energy(1));
        }),
        description: 'Raise your MC production 2 steps and your energy production 1 step.',
      },
    });
  }
}
