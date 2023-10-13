import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Size } from '../../../common/cards/render/Size';

export class ThawMining extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.THAW_MINING,
      tags: [Tag.BUILDING],
      cost: 6,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 heat to gain 2 steel',
            spend: {heat: 1},
            stock: {steel: 2},
          },
          {
            title: 'Spend 1 heat to gain 1 titanium',
            spend: {heat: 1},
            stock: {titanium: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x084',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 heat to gain 2 steel or 1 titanium.', (eb) => {
            eb.heat(1).startAction.steel(2).or(Size.SMALL).titanium(1);
          }).br;
        }),
      },
    });
  }
}
