import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class DwarfWillow extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DWARF_WILLOW,
      cost: 7,
      tags: [Tag.PLANT],
      requirements: {temperature: -12},

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'x118',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Requires -12°C or higher. Raise your plant production 1 step and gain 2 plants.',
      },
    });
  }
}
