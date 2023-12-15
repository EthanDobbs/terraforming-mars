import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';
import {max} from '../../Options';

export class ArcticEndoliths extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ARCTIC_ENDOLITHS,
      cost: 7,
      tags: [Tag.MICROBE],
      requirements: {temperature: -16, max},
      victoryPoints: 1,

      behavior: {
        stock: {plants: 2},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1},
      },

      metadata: {
        cardNumber: 'x381',
        renderData: CardRenderer.builder((b) => {
          b.plants(2).nbsp.microbes(1).asterix();
        }),
        description: 'Requires -16°C or colder. Gain 2 plants and add a microbe to ANOTHER card.',
      },
    });
  }
}
