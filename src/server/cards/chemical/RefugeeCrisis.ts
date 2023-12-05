import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import { Resource } from '../../../common/Resource';
import { Size } from '../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-2).slash().city().plus().colonies().influence({size: Size.SMALL})
});

export class RefugeeCrisis extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.REFUGEE_CRISIS,
      description: 'Lose 2 M€ for each city and colony (max 5 each), then reduced by influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.GREENS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, game.board.getCities(player).length + 
        player.getColoniesCount()) +
        turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
