import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';


const RENDER_DATA = CardRenderer.builder((b) => {
  b.production((pb) => pb.minus().megacredits(3)).nbsp.megacredits(3).slash().influence();
});

export class MandatoryInsurance extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.MANDATORY_INSURANCE,
      description: 'Decrease your M€ production 3 steps. Gain 3 M€ per influence.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.production.megacredits > -5) {
        const decreaseAmount = -Math.min(player.production.megacredits + 5, 3)
        player.production.add(Resource.MEGACREDITS, decreaseAmount, {log: true, from: this.name});
      }
      player.stock.add(Resource.MEGACREDITS, turmoil.getPlayerInfluence(player) * 3, {log: true, from: this.name});
    });
  }
}
