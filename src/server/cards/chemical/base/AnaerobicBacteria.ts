import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {digit} from '../../Options';

export class AnaerobicBacteria extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ANAEROBIC_BACTERIA,
      tags: [Tag.MICROBE],
      cost: 12,
      requirements: {oxygen: 4, max: true},

      behavior: {
        or: {
          autoSelect: true,
          behaviors: [
            {
              production: {energy: 2},
              title: 'Increase your energy production 2 steps',
            },
            {
              production: {heat: 3},
              title: 'Increase your heat production 3 steps',
            },
          ],
        },
      },

      metadata: {
        description: 'Oxygen must be 4% or lower. Increase your energy production 2 steps or your heat production 3 steps.',
        cardNumber: 'x155',
        renderData: CardRenderer.builder((b) => b.production((pb) => pb.energy(2).nbsp.or(Size.SMALL).nbsp.heat(3, {digit}))),
      },
    });
  }
}
