import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class OvdaCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.OVDA_CITY,
      tags: [Tag.CITY, Tag.VENUS],
      cost: 14,
      requirements: {venus: 18},
      victoryPoints: {tag: Tag.VENUS, per: 2},

      behavior: {
        production: {megacredits: 3, energy: -1},
        //off-world city
      },

      metadata: {
        cardNumber: 'x280',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          });
          b.city().asterix().br;
          b.vpText('1 VP for every 2 Venus tags you have.').br;
        }),
        description: 'Requires Venus 18% or higher. Lower your energy production 1 step and raise your MC production 3 steps. Place a city tile ON THE RESERVED AREA.',
      },
    });
  }
}
