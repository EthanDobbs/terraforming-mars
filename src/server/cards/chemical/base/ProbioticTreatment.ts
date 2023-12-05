import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {CardResource} from '../../../../common/CardResource';

export class ProbioticTreatment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PROBIOTIC_TREATMENT,
      cost: 3,

      behavior: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 3}
      },

      metadata: {
        cardNumber: 'x163',
        renderData: CardRenderer.builder((b) => {
          b.microbes(3).asterix();
        }),
        description: 'Add 3 microbes to ANOTHER card.',
      },
    });
  }
}
