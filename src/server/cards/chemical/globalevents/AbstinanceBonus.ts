import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import { Resource } from '../../../../common/Resource';
import { SelectResourcesDeferred } from '../../../deferredActions/SelectResourcesDeferred';
import { Size } from '../../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.tr(1, {size: Size.SMALL, cancelled: true}).colon().megacredits(5).nbsp.wild(1).slash().influence();
});

export class AbstinanceBonus extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ABSTINANCE_BONUS,
      description: 'Gain 5 M€ if you did not raised your TR this generation. Gain 1 standard resource per influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.REDS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (!player.generationData.hasRaisedTR) {
        player.stock.add(Resource.MEGACREDITS, 5, {from: this.name, log: true});
      }
      const count = turmoil.getPlayerInfluence(player);
      if (count > 0) {
        game.defer(new SelectResourcesDeferred(
          player,
          count,
          'Abstinance Bonus Global Event - Gain ' + count + ' resource(s) for influence',
        ));
      }
    });
  }
}
