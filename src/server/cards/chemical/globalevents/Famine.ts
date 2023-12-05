import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import { Resource } from '../../../../common/Resource';
import { Tag } from '../../../../common/cards/Tag';
import { played } from '../../Options';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().plants(2).nbsp.megacredits(-3).slash().building(1, {played}).influence({size: Size.SMALL});
});

export class Famine extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.FAMINE,
      description: 'Lose 2 plants. Lose 3 M€ for each building tag you have (max 5), then reduced by influence.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.stock.plants > 0) {
        player.stock.deduct(Resource.PLANTS, 2, {log: true, from: this.name});
      }
      const amount = Math.max(Math.min(5, player.tags.count(Tag.BUILDING, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, Math.min(amount * 3, player.stock.megacredits), {log: true, from: this.name});
    });
  }
}
