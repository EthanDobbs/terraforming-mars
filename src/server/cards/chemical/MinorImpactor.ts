import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {Tag} from '../../../common/cards/Tag';

export class MinorImpactor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MINOR_IMPACTOR,
      tags: [Tag.SPACE],
      cost: 3,
      behavior: {
        stock: {heat: 4},
        removeAnyPlants: 2,
      },

      metadata: {
        cardNumber: 'x018',
        renderData: CardRenderer.builder((b) => {
          b.heat(4, {digit}).nbsp;
          b.minus().plants(2, {all});
        }),
        description: 'Gain 4 heat. Remove up to 2 plants from any player.',
      },
    });
  }
}
