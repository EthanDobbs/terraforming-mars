import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(2).slash().colonies().nbsp.influence().colon().megacredits(5);
});

export class InterstallarColonization extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.INTERSTELLAR_COLONIZATION,
      description: 'Gain 2 M€ for each colony (max 5). The player(s) with the most influence gains 5 M€.',
      revealedDelegate: PartyName.SCIENTISTS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const colonies = Math.min(player.getColoniesCount(), 5);
      player.stock.add(Resource.MEGACREDITS, colonies * 2, {from: this.name, log: true});
    });
    const players = game.getPlayers().slice().sort(
      (p1, p2) => turmoil.getPlayerInfluence(p2) - turmoil.getPlayerInfluence(p1),
    );
    const score = turmoil.getPlayerInfluence(players[0]);
    while (players.length > 0 && turmoil.getPlayerInfluence(players[0]) === score) {
      players[0].stock.add(Resource.MEGACREDITS, 5, {log: true, from: this.name});
      players.shift();
    }
  }
}
