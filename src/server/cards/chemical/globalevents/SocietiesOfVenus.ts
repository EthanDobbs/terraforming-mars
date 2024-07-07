import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.production((pb) => pb.megacredits(1)).slash().tag(Tag.VENUS).nbsp.heat(2).slash().influence();
});

export class SocietiesOfVenus extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.SOCIETIES_OF_VENUS,
      description: 'Increase your M€ production 1 step for every Venus tag you have (max 5). Gain 2 heat per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.KELVINISTS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.min(player.tags.count(Tag.VENUS, 'raw'), 5);
      player.production.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
      player.stock.add(Resource.HEAT, turmoil.getPlayerInfluence(player), {log: true, from: this.name});
    });
  }
}
