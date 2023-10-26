import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class AtenGroupMining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ATEN_GROUP_MINING,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 26,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}],
      victoryPoints: 2,

      behavior: {
        production: {titanium: 2},
      },

      metadata: {
        cardNumber: 'x301',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(2));
        }),
        description: 'Requires that you have an Earth tag and a Venus tag. Increase your titanium production 2 steps.',
      },
    });
  }
}
