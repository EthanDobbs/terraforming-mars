import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import { Resource } from '../../../../common/Resource';
import { TileType } from '../../../../common/TileType';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().plants(1).slash().greenery().nbsp.heat(2).slash().influence();
});

export class WildfiresEvent extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.WILDFIRES,
      description: 'Lose 1 plant for each greenery tile you own (max 5). Gain 2 heat per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const greeneryTiles = game.board.spaces.filter((space) => space.player === player && space.tile?.tileType === TileType.GREENERY).length;
      player.stock.deduct(Resource.PLANTS, Math.min(greeneryTiles, player.plants), {log: true, from: this.name});
      player.stock.add(Resource.HEAT, turmoil.getPlayerInfluence(player) * 2, {log: true, from: this.name});
    });
  }
}
