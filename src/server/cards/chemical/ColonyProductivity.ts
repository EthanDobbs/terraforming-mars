import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import { SelectResourcesDeferred } from '../../deferredActions/SelectResourcesDeferred';
import { SimpleDeferredAction } from '../../deferredActions/DeferredAction';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.text('GAIN ALL YOUR COLONY BONUSES');
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
        game.defer(new SelectResourcesDeferred(
          player,
          count,
          'Colony Productivity Global Event - Gain ' + count + ' resource(s) for influence',
        ));
      }
    });
  }
}
