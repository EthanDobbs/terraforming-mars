import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { Resource } from '../../../common/Resource';
import { played } from '../Options';
import { Tag } from '../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().steel(1).energy(1).slash().building(1, {played}).influence({size: Size.SMALL});
});

export class LaborRevolt extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.LABOR_REVOLT,
      description: 'Lose 1 steel and 1 energy for each building tag you have (max 5), then reduced by influence.',
      revealedDelegate: PartyName.SCIENTISTS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.BUILDING, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.STEEL, Math.min(amount, player.stock.steel), {log: true, from: this.name});
      player.stock.deduct(Resource.ENERGY, Math.min(amount, player.stock.energy), {log: true, from: this.name});
    });
  }
}
