import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {max} from '../../Options';

export class DanuMontesRover extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DANU_MONTES_ROVER,
      tags: [Tag.SCIENCE, Tag.VENUS],
      cost: 2,
      requirements: {venus: 6, max},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x251',
        description: 'Venus must be 6% or lower.',
      },
    });
  }
}
