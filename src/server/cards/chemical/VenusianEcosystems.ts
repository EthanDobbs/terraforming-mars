import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { AddResourcesToCard } from '../../deferredActions/AddResourcesToCard';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.venus(1).nbsp.wild(1, {secondaryTag: Tag.VENUS}).slash().influence();
});

export class VenusianEcosystems extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.VENUSIAN_ECOSYSTEMS,
      description: 'Raise Venus 1 step. Add any Venus resource for each influence to a card.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.GREENS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.increaseVenusScaleLevel(game.getPlayersInGenerationOrder()[0], 1);
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = turmoil.getPlayerInfluence(player);
      if (amount > 0) {
        game.defer(new AddResourcesToCard(player, undefined, {count: amount, restrictedTag: Tag.VENUS}));
      }
    });
  }
}
