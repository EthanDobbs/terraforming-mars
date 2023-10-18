import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class Composting extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COMPOSTING,
      cost: 4,
      tags: [Tag.PLANT, Tag.MICROBE],
      requirements: [{tag: Tag.PLANT}, {tag: Tag.ANIMAL}, {tag: Tag.MICROBE}],

      behavior: {
        production: {plants: 1},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'x112',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).microbes(2).asterix();
        }),
        description: 'Requires that you have a plant tag, an animal tag, and a microbe tag. Raise your plant production 1 step and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
