import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(2).slash().tag(Tag.POWER).influence({size: Size.SMALL});
});

export class PowerGenerationSubsidies extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.POWER_GENERATION_SUBSIDIES,
      description: 'Gain 2 M€ for each power tag you have (max 5) and influence.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.min(5, player.tags.count(Tag.POWER, 'raw')) + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
