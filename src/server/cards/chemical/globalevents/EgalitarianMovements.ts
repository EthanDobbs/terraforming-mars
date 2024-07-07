import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-2).slash().tag(Tag.EARTH).plus().influence();
});

export class EgalitarianMovements extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.EGALITARIAN_MOVEMENTS,
      description: 'Lose 2 M€ for each Earth tag (max 5) and influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.min(player.tags.count(Tag.EARTH, 'raw'), 5) + turmoil.getPlayerInfluence(player);
      player.stock.deduct(Resource.MEGACREDITS, Math.min(amount * 2, player.megaCredits), {log: true, from: this.name});
    });
  }
}
