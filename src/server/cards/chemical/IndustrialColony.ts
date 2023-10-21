import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class IndustrialColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INDUSTRIAL_COLONY,
      tags: [Tag.POWER, Tag.SPACE],
      cost: 24,

      behavior: {
        production: {energy: 1, steel: 1},
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x352',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).steel(1)).colonies(1);
        }),
        description: 'Raise your energy production 1 step, your steel production 1 step, and place a colony.',
      },
    });
  }
}
