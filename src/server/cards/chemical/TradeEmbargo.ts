import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';


const RENDER_DATA = CardRenderer.builder((b) => {
  b.text('lose all').steel(1).titanium(1).br.influence().colon().megacredits(6);
});

export class TradeEmbargo extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.TRADE_EMBARGO,
      description: 'Lose all steel and titanium. The player(s) with the most influence gains 6 M€.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.deduct(Resource.STEEL, player.stock.steel, {log: true, from: this.name});
      player.stock.deduct(Resource.TITANIUM, player.stock.titanium, {log: true, from: this.name});
    });
    const players = game.getPlayers().slice().sort(
      (p1, p2) => turmoil.getPlayerInfluence(p2) - turmoil.getPlayerInfluence(p1),
    );
    const score = turmoil.getPlayerInfluence(players[0]);
      while (players.length > 0 && turmoil.getPlayerInfluence(players[0]) === score) {
        players[0].stock.add(Resource.MEGACREDITS, 6, {log: true, from: this.name})
        players.shift();
      }
  }
}
