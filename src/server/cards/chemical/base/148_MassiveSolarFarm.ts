import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {TileType} from '../../../../common/TileType';

export class MassiveSolarFarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MASSIVE_SOLAR_FARM,
      cost: 28,
      tags: [Tag.POWER, Tag.BUILDING],
      victoryPoints: 1,
      behavior: {
        production: {energy: 3},
        tile: {
          type: TileType.MASSIVE_SOLAR_FARM,
          on: 'land',
          title: 'Select space for special tile',
        },
      },
      metadata: {
        cardNumber: 'xB148',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(3)).nbsp.tile(TileType.MASSIVE_SOLAR_FARM, false);
        }),
        description: 'Increase your energy production 3 steps and place this tile.',
      },
    });
  }
}
