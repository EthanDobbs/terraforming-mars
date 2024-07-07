import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(3).slash().partyLeaders(1).nbsp.tr(1).slash().influence();
});

export class ConstitutionalReformation extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.CONSTITUTIONAL_REFORMATION,
      description: 'Gain 3 M€ for each party leader you have. Gain 1 TR per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const partyLeaders = turmoil.parties.filter((party) => party.partyLeader === player).length;
      player.stock.add(Resource.MEGACREDITS, partyLeaders * 3, {log: true, from: this.name});
      player.increaseTerraformRating(turmoil.getPlayerInfluence(player), {log: true});
    });
  }
}
