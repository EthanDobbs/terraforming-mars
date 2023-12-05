import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';

export class SteelExports extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.STEEL_EXPORTS,
      tags: [Tag.SPACE, Tag.BUILDING],
      cost: 10,

      action: {
        spend: {steel: 3},
        stock: {megacredits: 10},
      },

      metadata: {
        cardNumber: 'x203',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 steel to gain 10 M€.', (eb) => {
            eb.steel(3).startAction.megacredits(10);
          }).br;
        }),
      },
    });
  }
}
