import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {IPlayer} from '../../IPlayer';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { played } from '../Options';
import { Tag } from '../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.influence().plus().jovian({played}).plus().colonies().colon().br;
  b.text('1st:', Size.SMALL).minus().tr(2).nbsp;
  b.text('2nd:', Size.SMALL).minus().tr(1);
});

export class JovianWar extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.JOVIAN_WAR,
      description: 'Count your influence plus Jovian tags and colonies (no limits). The player(s) with the most (or 4 in solo) loses 2 TR. The player(s) with the 2nd most loses 1 TR.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    // Solo
    if (game.isSoloMode()) {
      const player = game.getPlayers()[0];
      if (this.getScore(player, turmoil) >= 4){
        player.decreaseTerraformRating(2);
      }
    } else {
      const players = game.getPlayers().slice().sort(
        (p1, p2) => this.getScore(p2, turmoil) - this.getScore(p1, turmoil),
      );

      // We have one rank 1 player
      if (this.getScore(players[0], turmoil) > this.getScore(players[1], turmoil)) {
        players[0].decreaseTerraformRating(2);
        players.shift();

        const score = this.getScore(players[0], turmoil);
        while (players.length > 0 && this.getScore(players[0], turmoil) === score) {
          players[0].decreaseTerraformRating(1);
          players.shift();
        }
        // We have at least two rank 1 players
      } else {
        const score = this.getScore(players[0], turmoil);
        while (players.length > 0 && this.getScore(players[0], turmoil) === score) {
          players[0].decreaseTerraformRating(2);
          players.shift();
        }
      }
    }
  }

  public getScore(player: IPlayer, turmoil: Turmoil) {
    return turmoil.getPlayerInfluence(player) + player.tags.count(Tag.JOVIAN, 'raw') + player.getColoniesCount();
  }
}
