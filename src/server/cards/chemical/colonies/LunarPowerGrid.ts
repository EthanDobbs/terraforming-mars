import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class LunarPowerGrid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUNAR_POWER_GRID,
      tags: [Tag.POWER, Tag.EARTH],
      cost: 7,

      behavior: {
        production: {energy: {tag: Tag.EARTH, per: 2}},
      },

      metadata: {
        cardNumber: 'x372',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).slash().earth(2, {played}));
        }),
        description: 'Increase your energy production 1 step for every 2 Earth tags you have, including this.',
      },
    });
  }
}
