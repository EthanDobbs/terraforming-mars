import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { all } from '../Options';
import { Size } from '../../../common/cards/render/Size';

export class UrbanDevelopment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.URBAN_DEVELOPMENT,
      cost: 8,
      tags: [Tag.BUILDING],
      victoryPoints: 1,

      behavior: {
        production: {energy: -1, megacredits: {cities: {where: 'everywhere'}}},
      },

      metadata: {
        cardNumber: 'x101',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(1).slash().city({size: Size.SMALL, all});
          });
        }),
        description: 'Lower your energy production 1 step and raise your MC production 1 step for every city tile.',
      },
    });
  }
}
