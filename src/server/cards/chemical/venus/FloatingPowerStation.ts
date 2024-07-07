import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class FloatingPowerStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FLOATING_POWER_STATION,
      tags: [Tag.POWER, Tag.VENUS],
      cost: 12,
      victoryPoints: 1,

      behavior: {
        production: {energy: 1},
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'x303',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).resource(CardResource.FLOATER, {amount: 2, secondaryTag: Tag.VENUS}).br;
        }),
        description: 'Increase your energy production 1 step and add 2 floaters to any Venus card.',
      },
    });
  }
}
