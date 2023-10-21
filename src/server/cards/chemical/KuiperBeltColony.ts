import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class KuiperBeltColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.KUIPER_BELT_COLONY,
      tags: [Tag.SPACE],
      cost: 25,
      victoryPoints: 2,

      behavior: {
        drawCard: 1,
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x355',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).cards(1);
        }),
        description: 'Place a colony and draw a card.',
      },
    });
  }
}
