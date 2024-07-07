import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {Resource} from '../../../../common/Resource';
import {Space} from '../../../boards/Space';
import {isHazardTileType} from '../../../../common/AresTileType';
import {SpaceType} from '../../../../common/boards/SpaceType';
import {IPlayer} from '@/server/IPlayer';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(1).slash().text('2').emptyTile('normal', {size: Size.SMALL}).asterix().influence({size: Size.SMALL});
});

export class RedTourism extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.RED_TOURISM,
      description: 'Gain 1 M€ for every 2 empty spaces next to your tiles (no limit), and influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }
  private static hasRealTile(space: Space) {
    return space.tile !== undefined && !isHazardTileType(space.tile.tileType);
  }
  private getAdjacentEmptyTiles(player: IPlayer): number {
    const board = player.game.board;
    return board.spaces.filter((space) => {
      if (space.spaceType === SpaceType.COLONY) {
        return false;
      }
      if (RedTourism.hasRealTile(space)) {
        return false;
      }
      return board.getAdjacentSpaces(space).some((adj) => {
        return RedTourism.hasRealTile(adj) && adj.player === player;
      });
    }).length;
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.floor(this.getAdjacentEmptyTiles(player) / 2) + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
