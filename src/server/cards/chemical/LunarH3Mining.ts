import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class LunarH3Mining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUNAR_H3_MINING,
      tags: [Tag.POWER, Tag.EARTH],
      cost: 16,

      behavior: {
        production: {titanium: 1, energy: 1},
      },

      metadata: {
        cardNumber: 'x365',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1).energy(1));
        }),
        description: 'Raise your titanium production 1 step and your energy production 1 step.',
      },
    });
  }
}
