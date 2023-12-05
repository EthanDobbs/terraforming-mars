import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class PoliticalUprisingChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.POLITICAL_UPRISING_CHEMICAL,

      behavior: {
        turmoil: {sendDelegates: {count: 4, manyParties: true}},
        stock: {megacredits: 8},
      },

      metadata: {
        cardNumber: 'xP57',
        renderData: CardRenderer.builder((b) => {
          b.delegates(4).megacredits(8);
        }),
        description: 'Place 4 delegates and gain 8 M€.',
      },
    });
  }
}
