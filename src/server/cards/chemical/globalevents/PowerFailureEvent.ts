import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';


const RENDER_DATA = CardRenderer.builder((b) => {
  b.text('lose all').energy(1).br.megacredits(-5).nbsp.energy(1).slash().influence();
});

export class PowerFailureEvent extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.POWER_FAILURE,
      description: 'Lose all energy and 5 M€. Then, gain 1 energy for each influence.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.deduct(Resource.ENERGY, player.stock.energy, {log: true, from: this.name});
      player.stock.deduct(Resource.MEGACREDITS, 5, {log: true, from: this.name});
      player.stock.add(Resource.ENERGY, turmoil.getPlayerInfluence(player), {log: true, from: this.name});
    });
  }
}
