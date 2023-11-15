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
  b.influence().plus().science(1, {played}).colon().br;
  b.text('1st:', Size.SMALL).tr(2).nbsp.text('2nd:', Size.SMALL).tr(1);
});

export class EradicationOfGeneticIllness extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ERADICATION_OF_GENETIC_ILLNESS,
      description: 'Count your influence plus science tags (no limits). The player(s) with the most (or 6 in solo) gains 2 TR. The player(s) with the 2nd most (or 3 in solo) gains 1 TR.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    // Solo
    if (game.isSoloMode()) {
      const player = game.getPlayers()[0];
      if (this.getScore(player, turmoil) >= 6){
        player.increaseTerraformRating(2, {log: true})
      } else if (this.getScore(player, turmoil) >= 3){
        player.increaseTerraformRating(1, {log: true})
      }
    } else {
      const players = game.getPlayers().slice().sort(
        (p1, p2) => this.getScore(p2, turmoil) - this.getScore(p1, turmoil),
      );

      // We have one rank 1 player
      if (this.getScore(players[0], turmoil) > this.getScore(players[1], turmoil)) {
        players[0].increaseTerraformRating(2, {log: true})
        players.shift();

        if (players.length === 1) {
          players[0].increaseTerraformRating(1, {log: true})
        } else if (players.length > 1) {
          const score = this.getScore(players[0], turmoil);
          while (players.length > 0 && this.getScore(players[0], turmoil) === score) {
            players[0].increaseTerraformRating(1, {log: true})
            players.shift();
          }
        }
        // We have at least two rank 1 players
      } else {
        const score = this.getScore(players[0], turmoil);
        while (players.length > 0 && this.getScore(players[0], turmoil) === score) {
          players[0].increaseTerraformRating(2, {log: true})
          players.shift();
        }
      }
    }
  }

  public getScore(player: IPlayer, turmoil: Turmoil) {
    return turmoil.getPlayerInfluence(player) + player.tags.count(Tag.SCIENCE, 'raw')
  }
}
