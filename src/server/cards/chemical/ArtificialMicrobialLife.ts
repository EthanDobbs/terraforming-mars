import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';
import {CardResource} from '../../../common/CardResource';

export class ArtificialMicrobialLife extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ARTIFICIAL_MICROBIAL_LIFE,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 16,
      requirements: {tag: Tag.MICROBE, count: 3},
      victoryPoints: 2,

      behavior: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 4},
      },

      metadata: {
        cardNumber: 'x236',
        renderData: CardRenderer.builder((b) => {
          b.microbes(4, {digit}).asterix();
        }),
        description: 'Requires that you have 3 microbe tags. Add 4 microbes to ANOTHER card.',
      },
    });
  }
}
