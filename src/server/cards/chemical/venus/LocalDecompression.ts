import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {GlobalParameter} from '../../../../common/GlobalParameter';
import {Tag} from '../../../../common/cards/Tag';

export class LocalDecompression extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LOCAL_DECOMPRESSION,
      tags: [Tag.VENUS],
      cost: 13,
      globalParameterRequirementBonus: {parameter: GlobalParameter.VENUS, steps: 2},

      behavior: {
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'x273',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your Venus requirements are +/- 2 steps, your choice in each case.', (eb) => {
            eb.plate('Venus requirements').startEffect.text('+/- 2');
          }).br;
          b.venus(1);
        }),
        description: 'Raise Venus 1 step.'
      },
    });
  }
}
