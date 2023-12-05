import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import { Resource } from '../../../../common/Resource';
import {played} from '../../Options';
import { Tag } from '../../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-3).slash().microbes(1, {played}).influence({size: Size.SMALL});
});

export class PesticideApplication extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.PESTICIDE_APPLICATION,
      description: 'Lose 3 M€ for each microbe tag you have (max 5), then reduced by influence.',
      revealedDelegate: PartyName.SCIENTISTS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.MICROBE, 'raw')) - turmoil.getPlayerInfluence(player), 0)
      player.stock.deduct(Resource.MEGACREDITS, Math.min(amount * 3, player.stock.megacredits), {log: true, from: this.name});
    });
  }
}
