import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class DryIceRings extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DRY_ICE_RINGS,
      tags: [Tag.VENUS, Tag.SPACE],
      cost: 30,
      victoryPoints: {tag: Tag.VENUS, per: 2},

      behavior: {
        global: {venus: 2},
      },

      metadata: {
        cardNumber: 'x277',
        renderData: CardRenderer.builder((b) => {
          b.venus(2).br;
          b.vpText('1 VP for every 2 Venus tags you have.').br;
        }),
        description: 'Raise Venus 2 steps.',
      },
    });
  }
}
