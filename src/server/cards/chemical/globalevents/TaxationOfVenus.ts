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
  b.megacredits(-2).slash().venus(1, {played}).influence({size: Size.SMALL})
});

export class TaxationOfVenus extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.TAXATION_OF_VENUS,
      description: 'Lose 2 M€ for each Venus tag (max 5), then reduced by influence.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.max(Math.min(5, player.tags.count(Tag.VENUS, 'raw')) - turmoil.getPlayerInfluence(player), 0);
      player.stock.deduct(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
