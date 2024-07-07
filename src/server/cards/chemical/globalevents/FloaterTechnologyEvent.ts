import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {CardResource} from '../../../../common/CardResource';
import {AddResourcesToCard} from '../../../deferredActions/AddResourcesToCard';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(2).slash().resource(CardResource.FLOATER).nbsp.resource(CardResource.FLOATER).slash().influence();
});

export class FloaterTechnologyEvent extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.FLOATER_TECHNOLOGY,
      description: 'Gain 2 M€ for each floater (max 5). Then, add a floater for each influence to a card.',
      revealedDelegate: PartyName.UNITY,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const floaters = Math.min(player.getResourceCount(CardResource.FLOATER), 5);
      player.stock.add(Resource.MEGACREDITS, floaters * 2, {from: this.name, log: true});
      const amount = turmoil.getPlayerInfluence(player);
      if (amount > 0) {
        game.defer(new AddResourcesToCard(player, CardResource.FLOATER, {count: amount}));
      }
    });
  }
}
