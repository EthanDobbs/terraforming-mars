import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {TileType} from '../../../common/TileType';
import {AdjacencyBonus} from '../../ares/AdjacencyBonus';
import {ICardMetadata} from '../../../common/cards/ICardMetadata';

export class PrimalNationalPark extends Card implements IProjectCard {
  constructor(
    name = CardName.MASSIVE_SOLAR_FARM,
    cost = 8,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      cardNumber: 'x408',
      renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.energy(3)).nbsp.tile(TileType.MASSIVE_SOLAR_FARM, false);
      }),
      description: 'Raise your energy production 3 steps and place this tile.'
    },
  ) {
    super({
      type: CardType.AUTOMATED,
      name,
      cost,
      tags: [Tag.BUILDING],
      victoryPoints: 1,
      adjacencyBonus,
      behavior: {
        production: {megacredits: 2},
        tile: {
          type: TileType.PRIMAL_NATIONAL_PARK,
          on: 'isolated',
          title: 'Select space for special tile',
          adjacencyBonus: adjacencyBonus,
        },
      },
      metadata,
    });
  }
}
