import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {GlobalParameter} from '../../../../common/GlobalParameter';
import {Tag} from '../../../../common/cards/Tag';

export class OceanographyResearch extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.OCEANOGRAPHY_RESEARCH,
      cost: 8,
      tags: [Tag.SCIENCE],
      globalParameterRequirementBonus: {parameter: GlobalParameter.OCEANS, steps: 2},

      behavior: {
        drawCard: 1
      },

      metadata: {
        cardNumber: 'x069',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your ocean requirements are +/- 2 steps, your choice in each case.', (eb) => {
            eb.plate('Ocean requirements').startEffect.text('+/- 2');
          }).br;
          b.cards(1);
        }),
        description: 'Draw a card.'
      },
    });
  }
}
