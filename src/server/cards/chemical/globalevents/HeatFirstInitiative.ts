import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PartyName} from '../../../../common/turmoil/PartyName';

export class HeatFirstInitiative extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.HEAT_FIRST_INITIATIVE,

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.KELVINISTS}},
        global: {temperature: 2},
      },

      metadata: {
        cardNumber: 'xP61',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).kelvinists().nbsp.temperature(2);
        }),
        description: 'Place 2 delegates into Kelvinists and raise the temperature 2 steps.',
      },
    });
  }
}
