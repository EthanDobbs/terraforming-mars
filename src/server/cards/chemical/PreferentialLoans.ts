import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {IPlayer} from '../../IPlayer';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { Resource } from '../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.tr(1).colon().nbsp.text('1st:', Size.SMALL).megacredits(10).production((pb) => pb.megacredits(-2)).br
  b.text('2nd:', Size.SMALL).megacredits(5).production((pb) => pb.megacredits(-1)).nbsp.megacredits(2).slash().influence();
});

export class PreferentialLoans extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.PREFERENTIAL_LOANS,
      description: 'The player with the most TR (or in solo) gains 10 M€ and decreases their M€ production 2 steps. The player with the second most gains 5 M€ and lowers their M€ production 1 step. Gain 2 M€ per influence',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.add(Resource.MEGACREDITS, turmoil.getPlayerInfluence(player), {log: true, from: this.name})
    })
    // Solo
    if (game.isSoloMode()) {
      const player = game.getPlayers()[0];
      this.firstPlaceReward(player);
    } else {
      const players = game.getPlayers().slice().sort(
        (p1, p2) => this.getScore(p2) - this.getScore(p1),
      );

      // We have one rank 1 player
      if (this.getScore(players[0]) > this.getScore(players[1])) {
        this.firstPlaceReward(players[0])
        players.shift();

        const score = this.getScore(players[0]);
        while (players.length > 0 && this.getScore(players[0]) === score) {
          this.secondPlaceReward(players[0]);
          players.shift();
        }
        // We have at least two rank 1 players
      } else {
        const score = this.getScore(players[0]);
        while (players.length > 0 && this.getScore(players[0]) === score) {
          this.firstPlaceReward(players[0])
          players.shift();
        }
      }
    }
  }

  public getScore(player: IPlayer) {
    return player.getTerraformRating()
  }
  private firstPlaceReward(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, 10, {log: true, from: this.name});
    if (player.production.megacredits > -5) {
      const decreaseAmount = -Math.min(player.production.megacredits + 5, 2)
      player.production.add(Resource.MEGACREDITS, decreaseAmount, {log: true, from: this.name});
    }
  }
  private secondPlaceReward(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, 5, {log: true, from: this.name});
    if (player.production.megacredits > -5) {
      player.production.add(Resource.MEGACREDITS, -1, {log: true, from: this.name});
    }
  }
}
