import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ConvoyFromTitan extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CONVOY_FROM_TITAN,
      tags: [Tag.SPACE],
      cost: 24,

      behavior: {
        production: {heat: 2},
        ocean: {},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x019',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1);
          b.production((pb) => pb.heat(2));
          b.cards(1);
        }),
        description: 'Place an ocean tile, increase your heat production 2 steps, and draw a card.',
      },
    });
  }
}
