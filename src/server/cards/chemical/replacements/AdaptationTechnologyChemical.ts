import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class AdaptationTechnologyChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ADAPTATION_TECHNOLOGY_CHEMICAL,
      tags: [Tag.SCIENCE],
      cost: 9,
      victoryPoints: 1,
      globalParameterRequirementBonus: {steps: 2},

      metadata: {
        cardNumber: 'xR05',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your global requirements are +2 or -2 steps, your choice in each case.', (eb) => {
            eb.plate('Global requirements').startEffect.text('+/- 2');
          });
        }),
      },
    });
  }
}
