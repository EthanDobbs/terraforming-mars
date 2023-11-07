import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class SyntheticGrowthHormones extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SYNTHETIC_GROWTH_HORMONES,
      tags: [Tag.SCIENCE],
      cost: 10,

      behavior: {
        stock: {plants: {tag: Tag.PLANT, each: 2}}
      },

      metadata: {
        cardNumber: 'x162',
        renderData: CardRenderer.builder((b) => {
          b.plants(2).slash().plants(1, {played});
        }),
        description: 'Gain 2 plants for each plant tag you have.',
      },
    });
  }
}