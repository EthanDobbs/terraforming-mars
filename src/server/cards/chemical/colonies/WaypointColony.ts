import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';

export class WaypointColony extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 20,
      tags: [Tag.SPACE],
      name: CardName.WAYPOINT_COLONY,
      type: CardType.ACTIVE,

      behavior: {
        colonies: {buildColony: {}},
      },

      cardDiscount: {tag: Tag.SPACE, amount: 2},
      metadata: {
        cardNumber: 'x344',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.SPACE).startEffect.megacredits(-2);
          }).br;
          b.colonies(1);
        }),
        description: 'Place a colony.',
      },
    });
  }
}
