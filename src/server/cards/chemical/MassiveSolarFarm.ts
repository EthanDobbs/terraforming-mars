import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { TileType } from '../../../common/TileType';
import { AdjacencyBonus } from '../../ares/AdjacencyBonus';
import { ICardMetadata } from '../../../common/cards/ICardMetadata';

export class MassiveSolarFarm extends Card implements IProjectCard {
  constructor(
    name = CardName.MASSIVE_SOLAR_FARM,
    cost = 26,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      cardNumber: 'x143',
      renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.energy(3)).nbsp.tile(TileType.MASSIVE_SOLAR_FARM, false);
      }),
      description: 'Raise your energy production 1 step and place this tile.'
    },
  ) {
    super({
      type: CardType.AUTOMATED,
      name,
      cost,
      tags: [Tag.POWER, Tag.BUILDING],
      victoryPoints: 1,
      adjacencyBonus,
      behavior: {
        production: {energy: 3},
        tile: {
          type: TileType.MASSIVE_SOLAR_FARM,
          on: 'land',
          title: 'Select space for special tile',
          adjacencyBonus: adjacencyBonus,
        },
      },
      metadata,
    });
  }
}
