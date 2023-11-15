import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { Resource } from '../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(1).slash().emptyTile('normal', {size: Size.SMALL}).influence({size: Size.SMALL});
});

export class LandRun extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.LAND_RUN,
      description: 'Gain 1 M€ for each tile you have (no limit) and influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = game.board.spaces.filter((space) => space.player === player).length + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
