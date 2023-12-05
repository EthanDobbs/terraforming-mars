import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class ExpeditionToDione extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.EXPEDITION_TO_DIONE,
      tags: [Tag.SPACE],
      cost: 19,
      behavior: {
        ocean: {},
        stock: {steel: 2},
      },
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x021',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).nbsp;
          b.steel(2);
        }),
        description: 'Place an ocean tile and gain 2 steel.',
      },
    });
  }
}
