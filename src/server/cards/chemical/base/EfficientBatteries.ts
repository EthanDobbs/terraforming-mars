import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class EfficientBatteries extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EFFICIENT_BATTERIES,
      tags: [Tag.POWER],
      cost: 5,

      behavior: {
        production: {energy: {tag: Tag.POWER, per: 2}},
      },

      metadata: {
        cardNumber: 'x147',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).slash().energy(2, {played}));
        }),
        description: 'Increase your energy production 1 step for every 2 power tags you have, including this.',
      },
    });
  }
}
