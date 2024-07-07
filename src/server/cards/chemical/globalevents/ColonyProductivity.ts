import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {GainResources} from '../../../inputs/GainResources';
import {message} from '../../../logs/MessageBuilder';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.text('GAIN ALL YOUR COLONY BONUSES').br.wild(1).slash().influence();
});

export class ColonyProductivity extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.COLONY_PRODUCTIVITY,
      description: 'Gain 1 standard ressource per influence.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.game.colonies.forEach((colony) => {
        colony.colonies.filter((owner) => owner === player.id).forEach((owner) => {
          player.game.defer(new SimpleDeferredAction(player, () => colony.giveColonyBonus(player.game.getPlayerById(owner))));
        });
      });
      const count = turmoil.getPlayerInfluence(player);
      if (count > 0) {
        player.defer(new GainResources(
          player,
          count,
          message('Colony Productivity Global Event - Gain ${0} resource(s) for influence', (b) => b.number(count)),
        ));
      }
    });
  }
}
