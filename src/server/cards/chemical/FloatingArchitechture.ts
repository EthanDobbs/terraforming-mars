import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { CardResource } from '../../../common/CardResource';

export class FloatingArchitechture extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FLOATING_ARCHITECHTURE,
      tags: [Tag.BUILDING],
      cost: 15,
      requirements: {floaters: 5},
      victoryPoints: {cities: {}, all: true, per: 3},

      behavior: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2},
      },

      metadata: {
        cardNumber: 'x310',
        renderData: CardRenderer.builder((b) => {
          b.floaters(2).asterix().br;
          b.vpText('1 VP for every 3rd City in play.');
        }),
        description: 'Requires that you have 5 floaters. Add 2 floaters to ANOTHER card.',
      },
    });
  }
}
