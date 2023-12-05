import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {Tag} from '../../../../common/cards/Tag';

export class GreenMarsInitiative extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.GREEN_MARS_INITIATIVE,
      tags: [Tag.PLANT],

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.GREENS}},
        greenery: {},
      },

      metadata: {
        cardNumber: 'xP61',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).greens().nbsp.greenery();
        }),
        description: 'Place 2 delegates into Greens. Place a greenery tile and raise the oxygen 1 step.',
      },
    });
  }
}
