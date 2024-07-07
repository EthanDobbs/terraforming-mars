import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {message} from '../../../logs/MessageBuilder';
import {GainResources} from '../../../inputs/GainResources';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().venus(1).nbsp.wild(1).slash().influence();
});

export class DegredationOfVenus extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.DEGREDATION_OF_VENUS,
      description: 'Lower Venus 1 step. Gain 1 standard resource per influence.',
      revealedDelegate: PartyName.SCIENTISTS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.increaseVenusScaleLevel(game.getPlayersInGenerationOrder()[0], -1);
    game.getPlayersInGenerationOrder().forEach((player) => {
      const count = turmoil.getPlayerInfluence(player);
      if (count > 0) {
        player.defer(new GainResources(
          player,
          count,
          message('Degredation of Venus Global Event - Gain ${0} resource(s) for influence', (b) => b.number(count)),
        ));
      }
    });
  }
}
