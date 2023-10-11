import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class RegolithTreatment extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.REGOLITH_TREATMENT,
      tags: [Tag.BUILDING],
      cost: 17,

      action: {
        spend: {energy: 3},
        tr: 1,
      },

      metadata: {
        cardNumber: 'x063',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 energy to raise your TR 1 step', (eb) => {
            eb.energy(3).startAction.tr(1);
          }).br;
        }),
      },
    });
  }
}
