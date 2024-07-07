import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {IPlayer} from '../../../IPlayer';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {Board} from '../../../boards/Board';
import {Resource} from '../../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.influence().plus().city({size: Size.SMALL}).colon().nbsp.text('1st:', Size.SMALL).megacredits(-9).br;
  b.text('2nd:', Size.SMALL).megacredits(-6).nbsp.text('3rd & below:', Size.SMALL).megacredits(-3);
});

export class Insurgency extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.INSURGENCY,
      description: 'Count your influence plus city tiles (no limits). The player(s) with the most (or 4 in solo) loses 9 M€. The player(s) with the 2nd most (or 2 in solo) loses 6 M€. All other players lose 3 M€.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    // Solo
    if (game.isSoloMode()) {
      const player = game.getPlayers()[0];
      if (this.getScore(player, turmoil, game) >= 4) {
        player.stock.deduct(Resource.MEGACREDITS, 9, {log: true, from: this.name});
      } else if (this.getScore(player, turmoil, game) >= 2) {
        player.stock.deduct(Resource.MEGACREDITS, 6, {log: true, from: this.name});
      } else {
        player.stock.deduct(Resource.MEGACREDITS, 3, {log: true, from: this.name});
      }
    } else {
      const players = game.getPlayers().slice().sort(
        (p1, p2) => this.getScore(p2, turmoil, game) - this.getScore(p1, turmoil, game),
      );

      // We have one rank 1 player
      if (this.getScore(players[0], turmoil, game) > this.getScore(players[1], turmoil, game)) {
        players[0].stock.deduct(Resource.MEGACREDITS, 9, {log: true, from: this.name});
        players.shift();

        const score = this.getScore(players[0], turmoil, game);
        while (players.length > 0 && this.getScore(players[0], turmoil, game) === score) {
          players[0].stock.deduct(Resource.MEGACREDITS, 6, {log: true, from: this.name});
          players.shift();
        }
        // We have at least two rank 1 players
      } else {
        const score = this.getScore(players[0], turmoil, game);
        while (players.length > 0 && this.getScore(players[0], turmoil, game) === score) {
          players[0].stock.deduct(Resource.MEGACREDITS, 9, {log: true, from: this.name});
          players.shift();
        }
      }
      const score = this.getScore(players[0], turmoil, game);
      while (players.length > 0 && this.getScore(players[0], turmoil, game) === score) {
        players[0].stock.deduct(Resource.MEGACREDITS, 3, {log: true, from: this.name});
        players.shift();
      }
    }
  }

  public getScore(player: IPlayer, turmoil: Turmoil, game: IGame) {
    return turmoil.getPlayerInfluence(player) + game.board.spaces.filter((space) => Board.isCitySpace(space) && space.player === player).length;
  }
}
