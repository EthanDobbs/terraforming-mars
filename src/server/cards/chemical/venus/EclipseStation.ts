import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class EclipseStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ECLIPSE_STATION,
      cost: 16,
      tags: [Tag.SPACE],
      victoryPoints: 1,

      behavior: {
        stock: {megacredits: {tag: Tag.SPACE, each: 2}}
      },

      metadata: {
        cardNumber: 'x307',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(2).slash().space({played});
        }),
        description: 'Gain 2 M€ for each space tag you have, including this.',
      },
    });
  }
}
