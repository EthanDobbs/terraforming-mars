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
  b.oxygen(1).nbsp.steel(1).slash().building(2, {played}).influence({size: Size.SMALL});
});

export class MiningIndustries extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.MINING_INDUSTRIES,
      description: 'Raise the oxygen 1 step. Gain 1 steel for every 2 building tags you have (no limit), influence counts as building tags.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.increaseOxygenLevel(game.getPlayersInGenerationOrder()[0], 1);
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.floor((player.tags.count(Tag.BUILDING, 'raw') + turmoil.getPlayerInfluence(player)) / 2);
      player.stock.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
