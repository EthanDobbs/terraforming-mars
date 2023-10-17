import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class WorldGovernmentOffices extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WORLD_GOVERNMENT_OFFICES,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 22,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}, {tag: Tag.JOVIAN}],
      victoryPoints: 1,

      behavior: {
        production: {megacredits: 4, energy: 1},
        city: {},
      },

      metadata: {
        cardNumber: 'x296',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(4);
          }).nbsp;
          b.city();
        }),
        description: 'Requires that you have an Earth tag, a Venus tag, and a Jovian tag. Lower your energy production 1 step and raise your M€ production 4 steps. Place a city tile.',
      },
    });
  }
}
