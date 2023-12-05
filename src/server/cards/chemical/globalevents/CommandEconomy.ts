import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';


const RENDER_DATA = CardRenderer.builder((b) => {
  b.text('ALL').colonyTile().colon().text('+ 1').br.megacredits(4).slash().influence();
});

export class CommandEconomy extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.COMMAND_ECONOMY,
      description: 'Increase all colony tracks 1 step. Gain 4 M€ per influence.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.add(Resource.MEGACREDITS, turmoil.getPlayerInfluence(player) * 3, {log: true, from: this.name});
    });
    const activeColonies = game.colonies.filter((colony) => colony.isActive);
    activeColonies.forEach((colony) => {
      colony.increaseTrack(1);
    });
  }
}
