import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {IPlayer} from '../../../IPlayer';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {SelectSpace} from '../../../inputs/SelectSpace';
import {LogHelper} from '../../../LogHelper';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.influence().plus().emptyTile('normal', {size: Size.SMALL}).colon().nbsp;
  b.text('1st & 2nd:', Size.SMALL).community();
});

export class LandDelegation extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.LAND_DELEGATION,
      description: 'Count your influence plus tiles (no limits). The player(s) with the most places their player marker on an unreserved area. Then, the player(s) with the 2nd most place of of theirs. Only those players may place tiles on their respective marked areas.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    // Solo
    if (game.isSoloMode()) {
      const player = game.getPlayers()[0];
      player.defer(this.landClaim(player));
    } else {
      const players = game.getPlayers().slice().sort(
        (p1, p2) => this.getScore(p2, turmoil, game) - this.getScore(p1, turmoil, game),
      );

      // We have one rank 1 player
      if (this.getScore(players[0], turmoil, game) > this.getScore(players[1], turmoil, game)) {
        players[0].defer(this.landClaim(players[0]));
        players.shift();

        if (players.length === 1) {
          players[0].defer(this.landClaim(players[0]));
        } else if (players.length > 1) {
          const score = this.getScore(players[0], turmoil, game);
          while (players.length > 0 && this.getScore(players[0], turmoil, game) === score) {
            players[0].defer(this.landClaim(players[0]));
            players.shift();
          }
        }
        // We have at least two rank 1 players
      } else {
        const score = this.getScore(players[0], turmoil, game);
        while (players.length > 0 && this.getScore(players[0], turmoil, game) === score) {
          players[0].defer(this.landClaim(players[0]));
          players.shift();
        }
      }
    }
  }

  public getScore(player: IPlayer, turmoil: Turmoil, game: IGame) {
    return turmoil.getPlayerInfluence(player) + game.board.spaces.filter((space) => space.tile !== undefined && space.player === player).length;
  }
  private landClaim(player: IPlayer): SelectSpace {
    return new SelectSpace(
      'Select space for claim',
      player.game.board.getNonReservedLandSpaces())
      .andThen((space) => {
        space.player = player;
        LogHelper.logBoardTileAction(player, space, 'land claim');
        return undefined;
      });
  }
}
