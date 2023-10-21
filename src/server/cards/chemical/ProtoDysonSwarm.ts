import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class ProtoDysonSwarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PROTO_DYSON_SWARM,
      tags: [Tag.POWER, Tag.SPACE],
      cost: 44,
      victoryPoints: 4,

      behavior: {
        production: {energy: 6},
      },

      metadata: {
        cardNumber: 'x373',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(6, {digit}));
        }),
        description: 'Raise your energy production 6 steps.',
      },
    });
  }
}
