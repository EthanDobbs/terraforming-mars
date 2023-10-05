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
import {Resource} from '@/common/Resource';
import {OrOptions} from '@/server/inputs/OrOptions';
import {SelectPlayer} from '@/server/inputs/SelectPlayer';
import {SelectOption} from '@/server/inputs/SelectOption';

export class Overgrowth extends Card implements IProjectCard {
  constructor(
    name = CardName.OVERGROWTH,
    cost = 7,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      description: {
        text: 'Requires that YOU have a greenery tile. Place this tile adjacent to ANY greenery.',
        align: 'left',
      },
      cardNumber: 'CH001',
      renderData: CardRenderer.builder((b) => {
        b.tile(TileType.OVERGROWTH, true).asterix();
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
    return new SelectSpace(
      'Select space next to greenery for special tile',
      this.getAvailableSpaces(player),
      (requestedSpace: Space) => {
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
            new SelectPlayer(
              Array.from(adjacentPlayers),
              'Select adjacent player to remove 4 M€ from',
              'Remove credits',
              (selectedPlayer: IPlayer) => {
                selectedPlayer.stock.deduct(Resource.MEGACREDITS, 4, {log: true, from: player});
                return undefined;
              },
            ),
            new SelectOption(
              'Don\'t remove M€ from adjacent player',
              'Confirm',
              () => {
                return undefined;
              },
            ),
          );
        }
        return undefined;
      },
    );
  }
}
