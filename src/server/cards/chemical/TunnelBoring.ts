import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class TunnelBoring extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TUNNEL_BORING,
      cost: 16,
      tags: [Tag.BUILDING],
      victoryPoints: 1,

      behavior: {
        production: {steel: 2},
      },

      metadata: {
        cardNumber: 'x102',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(2));
        }),
        description: 'Raise your steel production 2 steps.',
      },
    });
  }
}
