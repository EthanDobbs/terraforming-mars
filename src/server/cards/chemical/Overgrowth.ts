import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CanAffordOptions, IPlayer} from '../../IPlayer';
import {TileType} from '../../../common/TileType';
import {SelectSpace} from '../../inputs/SelectSpace';
import {Space} from '../../boards/Space';
import {CardName} from '../../../common/cards/CardName';
import {AdjacencyBonus} from '../../ares/AdjacencyBonus';
import {ICardMetadata} from '../../../common/cards/ICardMetadata';
import {CardRenderer} from '../render/CardRenderer';
import {Board} from '../../boards/Board';
import {OrOptions} from '../../../server/inputs/OrOptions';
import {SelectPlayer} from '../../../server/inputs/SelectPlayer';
import {SelectOption} from '../../../server/inputs/SelectOption';
import {all} from '../Options';
import {Resource} from '../../../common/Resource';

export class Overgrowth extends Card implements IProjectCard {
  constructor(
    name = CardName.OVERGROWTH,
    cost = 7,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      description: {
        text: 'Requires that YOU have a greenery tile. Raise the oxygen 1 step. Place this tile adjacent to ANY greenery. IF THERE ARE TILES ADJACENT TO THIS TILE, YOU MAY REMOVE 4 M€ FROM THE OWNER OF ONE OF THOSE TILES.',
        align: 'left',
      },
      cardNumber: 'x001',
      renderData: CardRenderer.builder((b) => {
        b.tile(TileType.OVERGROWTH, true).asterix().nbsp.minus().megacredits(4, {all}).asterix();
        b.oxygen(1).br;
      }),
    },
  ) {
    super({
      type: CardType.EVENT,
      name,
      tags: [Tag.PLANT],
      cost,
      adjacencyBonus,
      requirements: {greeneries: 1},
      metadata,
      victoryPoints: -1,
      behavior: {
        global: {oxygen: 1},
      },
    });
  }


  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesOnLand(player, canAffordOptions)
      .filter((space) => player.game.board.getAdjacentSpaces(space).filter(Board.isGreenerySpace).length > 0);
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions): boolean {
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space next to greenery for special tile', this.getAvailableSpaces(player))
      .andThen((requestedSpace: Space) => {
        player.game.addTile(player, requestedSpace, {
          tileType: TileType.OVERGROWTH,
        });
        requestedSpace.adjacency = this.adjacencyBonus;

        const adjacentPlayers: Set<IPlayer> = new Set();
        player.game.board.getAdjacentSpaces(requestedSpace).forEach((space) => {
          if (space.player && space.player !== player && space.tile) {
            adjacentPlayers.add(space.player);
          }
        });

        if (adjacentPlayers.size > 0) {
          return new OrOptions(
            new SelectPlayer(Array.from(adjacentPlayers), 'Select adjacent player to remove 4 M€ from', 'Remove credits')
              .andThen((selectedPlayer: IPlayer) => {
                selectedPlayer.stock.deduct(Resource.MEGACREDITS, 4, {log: true, from: player});
                return undefined;
              }),
            new SelectOption('Don\'t remove M€ from adjacent player', 'Confirm')
              .andThen(() => {
                return undefined;
              }),
          )
        };
        return undefined;
      },
    );
  }
}
