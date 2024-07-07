import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ExtremePowerEfficiency extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EXTREME_POWER_EFFICIENCY,
      tags: [Tag.POWER],
      cost: 11,

      behavior: {
        production: {energy: {tag: Tag.BUILDING, per: 2}},
      },

      metadata: {
        cardNumber: 'x233',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).slash().tag(Tag.BUILDING, 2));
        }),
        description: 'Increase your energy production 1 step for every 2 building tags you have.',
      },
    });
  }
}
