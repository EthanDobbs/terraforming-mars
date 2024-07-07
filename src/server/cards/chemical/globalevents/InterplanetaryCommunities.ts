import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(1).slash().diverseTag().nbsp.cards(1).slash().influence();
});

export class InterplanetaryCommunities extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.INTERPLANETARY_COMMUNITIES,
      description: 'Gain 1 M€ for each unique tag you have. Draw a card for each influence.',
      revealedDelegate: PartyName.SCIENTISTS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.add(Resource.MEGACREDITS, player.tags.distinctCount('globalEvent'), {log: true, from: this.name});
      player.drawCard(turmoil.getPlayerInfluence(player));
    });
  }
}
