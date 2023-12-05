import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';

export class BiomassReactor extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.BIOMASS_REACTOR,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 9,

      behavior: {
        stock: {energy: 2}
      },

      action: {
        spend: {plants: 1},
        stock: {energy: 3},
      },

      metadata: {
        cardNumber: 'x078',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 plant to gain 3 energy.', (eb) => {
            eb.plants(1).startAction.energy(3);
          }).br;
          b.energy(2);
        }),
        description: 'Gain 2 energy.',
      },
    });
  }
}
