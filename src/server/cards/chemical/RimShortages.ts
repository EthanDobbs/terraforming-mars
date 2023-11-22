import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import { Resource } from '../../../common/Resource';
import { Tag } from '../../../common/cards/Tag';
import { played } from '../Options';
import { Size } from '../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-4).slash().jovian({played}).influence({size: Size.SMALL})
});

export class RimShortages extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.RIM_SHORTAGES,
      description: 'Lose 4 M€ for each Jovian tag (max 5), then reduced by influence.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.increaseOxygenLevel(game.getPlayersInGenerationOrder()[0], -1);
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.JOVIAN, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount * 4, {log: true, from: this.name});
    });
  }
}
