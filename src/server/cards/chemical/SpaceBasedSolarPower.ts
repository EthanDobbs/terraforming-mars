import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class SpaceBasedSolarPower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SPACE_BASED_SOLAR_POWER,
      cost: 17,
      tags: [Tag.POWER, Tag.SPACE],
      victoryPoints: 1,

      behavior: {
        production: {energy: 2},
      },

      metadata: {
        cardNumber: 'x138',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2));
        }),
        description: 'Raise your energy production 2 steps.',
      },
    });
  }
}
