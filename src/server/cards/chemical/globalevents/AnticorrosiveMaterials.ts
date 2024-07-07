import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';
import {AddResourcesToCard} from '../../../deferredActions/AddResourcesToCard';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.resource(CardResource.FLOATER, {amount: 2, secondaryTag: Tag.VENUS}).nbsp.wild(1, {secondaryTag: Tag.VENUS}).slash().influence();
});

export class AnticorrosiveMaterials extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ANTICORROSIVE_MATERIALS,
      description: 'Add 2 floaters to a Venus card. Add any Venus resource for each influence to a card.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      game.defer(new AddResourcesToCard(player, CardResource.FLOATER, {count: 2, restrictedTag: Tag.VENUS}));
      const amount = turmoil.getPlayerInfluence(player);
      if (amount > 0) {
        game.defer(new AddResourcesToCard(player, undefined, {count: amount, restrictedTag: Tag.VENUS}));
      }
    });
  }
}
