import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class SpecialDesignChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SPECIAL_DESIGN_CHEMICAL,
      tags: [Tag.SCIENCE],
      cost: 1,
      globalParameterRequirementBonus: {steps: 2, nextCardOnly: true},

      metadata: {
        cardNumber: 'xR01',
        renderData: CardRenderer.builder((b) => {
          b.plate('Global requirements').colon().text('+/- 2');
        }),
        description: 'The next card you play this generation is +2 or -2 steps in global requirements, your choice.',
      },
    });
  }
}
