import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {Size} from '../../../common/cards/render/Size';

export class GrandStadium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GRAND_STADIUM,
      tags: [Tag.BUILDING],
      cost: 10,
      victoryPoints: 1,

      behavior: {
        production: {energy: -1, megacredits: 2},
        stock: {megacredits: {cities: {where: 'everywhere'}}},
      },

      metadata: {
        cardNumber: 'x215',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          }).nbsp;
          b.megacredits(1).slash().city({all, size: Size.SMALL});
        }),
        description: 'Lower your energy production 1 step, raise your MC produciton 2 steps, and gain 1MC for every city tile in play.',
      },
    });
  }
}
