import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class GeneticBreakthrough extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.GENETIC_BREAKTHROUGH,
      tags: [Tag.SCIENCE],
      cost: 11,
      victoryPoints: 1,
      requirements: {sumTags: [Tag.PLANT, Tag.ANIMAL, Tag.MICROBE], count: 6},

      behavior: {
        addResourcesToAnyCard: [
          {type: CardResource.MICROBE, count: 2},
          {type: CardResource.ANIMAL, count: 1},
        ],
      },

      metadata: {
        cardNumber: 'x180',
        renderData: CardRenderer.builder((b) => {
          b.animals(1).asterix().nbsp;
          b.microbes(2).asterix();
        }),
        description: 'Requires 6 total plant tags, animal tags, and microbe tags. Add 1 animal to ANOTHER card and 2 microbes to ANOTHER card.',
      },
    });
  }
}
