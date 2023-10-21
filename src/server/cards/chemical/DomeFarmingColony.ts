import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class DomeFarmingColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DOME_FARMING_COLONY,
      tags: [Tag.PLANT, Tag.SPACE],
      cost: 20,

      behavior: {
        production: {plants: 1},
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x353',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).colonies(1);
        }),
        description: 'Raise your plant production 1 step and place a colony.',
      },
    });
  }
}
