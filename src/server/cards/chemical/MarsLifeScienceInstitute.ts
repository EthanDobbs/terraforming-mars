import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class MarsLifeScienceInstitute extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MARS_LIFE_SCIENCE_INSTITUTE,
      cost: 13,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      requirements: [{tag: Tag.PLANT}, {tag: Tag.ANIMAL}, {tag: Tag.MICROBE}],
      victoryPoints: 2,

      behavior: {
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x165',
        renderData: CardRenderer.builder((b) => {
          b.cards(1);
        }),
        description: 'Requires that you have a plant tag, an animal tag, and a microbe tag. Draw a card.',
      },
    });
  }
}
