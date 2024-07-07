import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.plus().tr(1).colon().megacredits(-10).nbsp.production((pb) => pb.megacredits(1)).slash().influence();
});

export class RedUprising extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.RED_UPRISING,
      description: 'Lose 10 M€ if you raised your TR this generation. Raise your M€ production 1 step per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.generationData.hasRaisedTR) {
        player.stock.deduct(Resource.MEGACREDITS, 10, {from: this.name, log: true});
      }
      player.production.add(Resource.MEGACREDITS, turmoil.getPlayerInfluence(player), {from: this.name, log: true});
    });
  }
}
