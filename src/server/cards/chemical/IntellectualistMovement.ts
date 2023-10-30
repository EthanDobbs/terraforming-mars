import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';
import {Tag} from '../../../common/cards/Tag';

export class IntellectualistMovement extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.INTELLECTUALIST_MOVEMENT,
      tags: [Tag.SCIENCE],

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.SCIENTISTS}},
        drawCard: 3,
      },

      metadata: {
        cardNumber: 'xP59',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).scientists().cards(3);
        }),
        description: 'Place 2 delegates into Scientists and draw 3 cards.',
      },
    });
  }
}
