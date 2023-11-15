import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import { Tag } from '../../../common/cards/Tag';
import { played } from '../Options';
import { Size } from '../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.production((pb) => pb.megacredits(2)).nbsp.megacredits(1).slash().building(1, {played}).influence({size: Size.SMALL});
});

export class MarsStockExchange extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.MARS_STOCK_EXCHANGE,
      description: 'Increase your M€ production 2 steps. Gain 1 M€ for each building tag (no limit) and influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      player.production.add(Resource.MEGACREDITS, 2, {log: true, from: this.name});
      const amount = player.tags.count(Tag.BUILDING, 'raw') + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
