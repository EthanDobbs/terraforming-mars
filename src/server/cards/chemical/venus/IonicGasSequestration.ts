import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class IonicGasSequestration extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.IONIC_GAS_SEQUESTRATION,
      tags: [Tag.SCIENCE, Tag.SPACE],
      cost: 13,

      behavior: {
        global: {venus: 1},
        stock: {titanium: 2},
      },

      metadata: {
        cardNumber: 'x242',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).nbsp.titanium(2);
        }),
        description: 'Raise Venus 1 step and gain 2 titanium.',
      },
    });
  }
}
