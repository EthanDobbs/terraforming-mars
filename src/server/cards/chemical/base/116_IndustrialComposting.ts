import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class IndustrialComposting extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INDUSTRIAL_COMPOSTING,
      cost: 4,
      tags: [Tag.MICROBE, Tag.BUILDING],
      requirements: [{tag: Tag.PLANT}, {tag: Tag.ANIMAL}, {tag: Tag.MICROBE}],

      behavior: {
        production: {plants: 1},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'xB116',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Requires a plant tag, an animal tag, and a microbe tag. Increase your plant production 1 step and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
