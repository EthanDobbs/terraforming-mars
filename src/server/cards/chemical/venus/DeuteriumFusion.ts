import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class DeuteriumFusion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DEUTERIUM_FUSION,
      tags: [Tag.SCIENCE, Tag.POWER],
      cost: 9,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}, {tag: Tag.JOVIAN}],

      behavior: {
        production: {energy: 2},
      },

      metadata: {
        cardNumber: 'x304',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2));
        }),
        description: 'Requires an Earth tag, a Venus tag, and a Jovian tag. Increase your energy production 2 steps.',
      },
    });
  }
}
