import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class NitrogenShipmentChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.NITROGEN_SHIPMENT_CHEMICAL,

      behavior: {
        production: {plants: 1},
        tr: 1,
        stock: {megacredits: 12},
      },

      metadata: {
        cardNumber: 'xR47',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).tr(1).megacredits(12);
        }),
        description: 'Increase your plant production 1 step. Increase your TR 1 step. Gain 12 M€.',
      },
    });
  }
}
