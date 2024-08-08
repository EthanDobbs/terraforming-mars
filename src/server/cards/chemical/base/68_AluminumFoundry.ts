import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class AluminumFoundry extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ALUMINUM_FOUNDRY,
      tags: [Tag.BUILDING],
      cost: 14,

      action: {
        spend: {energy: 4},
        global: {oxygen: 1},
        stock: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'xB68',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 4 energy to raise the oxygen 1 step and gain 3 M€.', (eb) => {
            eb.energy(4, {digit}).startAction.oxygen(1).megacredits(3);
          }).br;
        }),
      },
    });
  }
}
