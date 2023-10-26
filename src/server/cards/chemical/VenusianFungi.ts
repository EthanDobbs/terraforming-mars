import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class VenusianFungi extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUSIAN_FUNGI,
      tags: [Tag.MICROBE, Tag.VENUS],
      cost: 16,
      requirements: {venus: 10},
      victoryPoints: 1,

      behavior: {
        global: {venus: 1},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 3, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'x289',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).microbes(3, {secondaryTag: Tag.VENUS}).br;
        }),
        description: 'Requires Venus 10%. Raise Venus 1 step and add 3 microbes to any Venus card.',
      },
    });
  }
}
