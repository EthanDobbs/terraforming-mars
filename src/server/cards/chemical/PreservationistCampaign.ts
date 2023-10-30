import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';

export class PreservationistCampaign extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.PRESERVATIONIST_CAMPAIGN,

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.REDS}},
        tr: -1,
        stock: {megacredits: 18},
      },
      startingMegacredits: 18,

      metadata: {
        cardNumber: 'xP61',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).reds().br;
          b.minus().tr(1).nbsp.megacredits(18);
        }),
        description: 'Place 2 delegates into Reds. Lower your TR 1 step and gain 18 M€.',
      },
    });
  }
}
