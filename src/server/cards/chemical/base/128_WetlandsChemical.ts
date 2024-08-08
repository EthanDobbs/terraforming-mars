import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';
import {TileType} from '../../../../common/TileType';

export class WetlandsChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WETLANDS_CHEMICAL,
      cost: 14,
      tags: [Tag.PLANT],
      requirements: {temperature: -6},
      victoryPoints: 1,

      behavior: {
        stock: {plants: 3},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
        tile: {
          type: TileType.WETLANDS_CHEMICAL,
          on: 'land',
          title: 'Select space for special tile',
        },
      },

      metadata: {
        cardNumber: 'xB128',
        renderData: CardRenderer.builder((b) => {
          b.tile(TileType.WETLANDS_CHEMICAL, false).nbsp.plants(3).br.resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Requires -6°C or warmer. Place this tile, gain 3 plants, and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
