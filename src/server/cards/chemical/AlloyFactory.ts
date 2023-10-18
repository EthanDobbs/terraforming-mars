import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class AlloyFactory extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ALLOY_FACTORY,
      tags: [Tag.BUILDING],
      cost: 5,

      behavior: {
        stock: {energy: 4}
      },

      action: {
        spend: {energy: 2},
        stock: {steel: 2},
      },

      metadata: {
        cardNumber: 'x190',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 energy to gain 2 steel.', (eb) => {
            eb.energy(2).startAction.steel(2);
          }).br;
          b.energy(4, {digit});
        }),
        description: 'Gain 4 energy resources.',
      },
    });
  }
}
