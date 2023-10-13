import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MilitarySpacePort extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MILITARY_SPACE_PORT,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 23,
      victoryPoints: -1,

      behavior: {
        city: {},
        production: {energy: -1, megacredits: 3},
        drawCard: 1,
        stock: {titanium: 1},
      },

      metadata: {
        cardNumber: 'x212',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).nbsp;
            pb.plus().megacredits(3);
          }).br;
          b.city().cards(1).titanium(2);
        }),
        description: 'Lower your energy production 1 step, raise your MC produciton 3 steps, place a city tile, draw a card, and gain 2 titanium.',
      },
    });
  }
}
