import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class HydrogenInjection extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYDROGEN_INJECTION,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 18,

      behavior: {
        global: {venus: 1},
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'x282',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).nbsp.venus(1).br;
        }),
        description: 'Raise your titanium production 1 step and raise Venus 1 step.',
      },
    });
  }
}
