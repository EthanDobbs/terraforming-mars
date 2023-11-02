import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class RemoteTestZone extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 15,
      tags: [Tag.SPACE],
      name: CardName.REMOTE_TEST_ZONE,
      type: CardType.ACTIVE,

      behavior:{
        colonies: {buildColony: {}},
      },
      
      action:{
        spend: {megacredits: 3},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x343',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 M€ to draw a card.', (eb) => {
            eb.megacredits(3).startAction.cards(1);
          }).br;
          b.colonies(1);
        }),
        description: 'Place a colony.'
      },
    });
  }
}
