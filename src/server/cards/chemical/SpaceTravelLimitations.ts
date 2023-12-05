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
  b.minus().titanium(3).nbsp.megacredits(-2).slash().space({played}).influence({size: Size.SMALL})
});

export class SpaceTravelLimitations extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.SPACE_TRAVEL_LIMITATIONS,
      description: 'Lose 3 titanium. Lose 2 M€ for each space tag (max 5), then reduced by influence.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.stock.deduct(Resource.TITANIUM, 3, {log: true, from: this.name});
      const amount = Math.max(Math.min(5, player.tags.count(Tag.SPACE, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
