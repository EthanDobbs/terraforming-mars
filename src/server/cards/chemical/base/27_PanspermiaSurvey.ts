import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class PanspermiaSurvey extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PANSPERMIA_SURVEY,
      tags: [Tag.SPACE],
      cost: 25,
      victoryPoints: 3,

      behavior: {
        addResourcesToAnyCard: [
          {type: CardResource.MICROBE, count: 2},
          {type: CardResource.ASTEROID, count: 1},
        ],
      },

      metadata: {
        cardNumber: 'xB27',
        renderData: CardRenderer.builder((b) => {
          b.resource(CardResource.ASTEROID).asterix().nbsp;
          b.resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Add 1 asteorid to ANOTHER card and 3 microbes to ANOTHER card.',
      },
    });
  }
}
