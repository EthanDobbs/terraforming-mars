import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import { Resource } from '../../../../common/Resource';
import { Tag } from '../../../../common/cards/Tag';
import { played } from '../../Options';
import { Size } from '../../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-1).slash().science(1, {played}).space({played}).energy(1, {played}).influence({size: Size.SMALL})
});

export class TechnologicalRegression extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.TECHNOLOGICAL_REGRESSION,
      description: 'Lose 1 M€ for each power, space, and science tag (max 5 each tag), then reduced by influence.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.SPACE, 'raw')) + 
        Math.min(5, player.tags.count(Tag.POWER, 'raw')) +
        Math.min(5, player.tags.count(Tag.SCIENCE, 'raw')) -
        turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
