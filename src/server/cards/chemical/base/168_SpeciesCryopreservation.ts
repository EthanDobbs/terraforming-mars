import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {Tag} from '../../../../common/cards/Tag';

export class SpeciesCryopreservation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SPECIES_CRYOPRESERVATION,
      cost: 5,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      requirements: {tag: Tag.ANIMAL, count: 2},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x166',
        description: 'Requires 2 animal tags.',
      },
    });
  }
}
