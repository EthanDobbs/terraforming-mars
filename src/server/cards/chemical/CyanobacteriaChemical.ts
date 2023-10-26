import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class CyanobacteriaChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CYANOBACTERIA_CHEMICAL,
      cost: 7,
      tags: [Tag.MICROBE],
      requirements: {oceans: 2},

      behavior: {
        production: {plants: 1},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1},
      },

      metadata: {
        cardNumber: 'x130',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).microbes(1).asterix();
        }),
        description: 'Requires 2 ocean tiles. Raise your plant production 1 step and add 1 microbe to ANOTHER card.',
      },
    });
  }
}
