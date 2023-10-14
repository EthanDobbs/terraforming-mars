import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { TileType } from '../../../common/TileType';
import { AdjacencyBonus } from '../../ares/AdjacencyBonus';
import { ICardMetadata } from '../../../common/cards/ICardMetadata';
import { Size } from '../../../common/cards/render/Size';
import { IPlayer } from '../../IPlayer';
import { CanAffordOptions } from '../../IPlayer';
import { Board } from '../../boards/Board';
import { Space } from '../../boards/Space';
import { SelectSpace } from '../../inputs/SelectSpace';
import { Resource } from '../../../common/Resource';

export class GreatHarbor extends Card implements IProjectCard {
  constructor(
    name = CardName.GREAT_HARBOR,
    cost = 12,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      cardNumber: 'x240',
      renderData: CardRenderer.builder((b) => {
        b.tile(TileType.GREAT_HARBOR, false).asterix().nbsp.megacredits(1).slash().emptyTile('normal', {size: Size.SMALL}).oceans(1, {size: Size.SMALL});
      }),
      description: 'Requires +2°C or higher. Place this tile NEXT TO AN OCEAN, then gain 1MC for each tile you own adjacent to an ocean, including this.'
    },
  ) {
    super({
      type: CardType.AUTOMATED,
      name,
      cost,
      tags: [Tag.BUILDING],
      requirements: {temperature: 2},
      victoryPoints: 1,
      adjacencyBonus,
      metadata,
    });
  }
  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesOnLand(player, canAffordOptions)
      .filter((space) => player.game.board.getAdjacentSpaces(space).filter(Board.isOceanSpace).length > 0);
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions): boolean {
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space next to greenery for special tile', this.getAvailableSpaces(player))
      .andThen((requestedSpace) => {
        player.game.addTile(player, requestedSpace, {
          tileType: TileType.GREAT_HARBOR,
        });
        requestedSpace.adjacency = this.adjacencyBonus;
        player.stock.add(Resource.MEGACREDITS, player.game.board.spaces.filter((space: Space) => space.player === player && player.game.board.getAdjacentSpaces(space).filter(Board.isOceanSpace).length > 0).length);
        return undefined;
      });
  }
}
