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
import { SimpleDeferredAction } from '../../deferredActions/DeferredAction';
import { SelectSpace } from '../../inputs/SelectSpace';
import { TileType } from '../../../common/TileType';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().oceans(1, {all: true}).nbsp.plus().oceans(1).nbsp.megacredits(-2).slash().building(1, {played}).influence({size: Size.SMALL})
});

export class LowlandFlooding extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.LOWLAND_FLOODING,
      description: 'The first player removes an ocean tile from the board and places an ocean in a new location, if possible. Lose 2 M€ for each building tag (max 5), then reduced by influence.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    const firstPlayer = game.getPlayersInGenerationOrder()[0];
    if (game.canRemoveOcean() && game.board.getAvailableSpacesForOcean(firstPlayer).length > 0) {
      game.defer(new SimpleDeferredAction(firstPlayer, () => {
        return new SelectSpace('Select ocean to remove', game.board.spaces.filter((space) => space.tile?.tileType === TileType.OCEAN)).andThen((removedOcean) => {
          game.removeTile(removedOcean.id);
          return new SelectSpace('Select a space for the new ocean', game.board.getAvailableSpacesForOcean(firstPlayer).filter((space) => space.id !== removedOcean.id)).andThen((newOcean) => {
            game.addOcean(firstPlayer, newOcean);
            return undefined;
          });
        })
      }))
    }
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.BUILDING, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
