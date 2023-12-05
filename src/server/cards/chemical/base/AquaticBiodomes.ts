import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';

export class AquaticBiodomes extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.AQUATIC_BIODOMES,
      cost: 23,
      tags: [Tag.ANIMAL, Tag.PLANT, Tag.BUILDING],
      requirements: {temperature: -10},

      behavior: {
        production: {plants: 2},
        ocean: {},
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 2},
      },

      metadata: {
        cardNumber: 'x122',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2)).oceans(1).animals(2).asterix();
        }),
        description: 'Requires -10°C or warmer. Increase your plant production 2 steps, place an ocean tile, and add 2 animals to ANOTHER card.',
      },
    });
  }
}
