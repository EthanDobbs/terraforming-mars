import { IGlobalEvent } from '../../../turmoil/globalEvents/IGlobalEvent';
import { GlobalEvent } from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardResource} from '../../../../common/CardResource';
import {AddResourcesToCard} from '../../../deferredActions/AddResourcesToCard';
import {CardRenderer} from '../../render/CardRenderer';
import {AltSecondaryTag} from '../../../../common/cards/render/AltSecondaryTag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.cards(1, {secondaryTag: AltSecondaryTag.MICROBE}).colon().microbes(1).nbsp;
  b.microbes(1).slash().influence();
});

export class MicrobialBoom extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.MICROBIAL_BOOM,
      description: 'Add a microbe to each card that can collect microbes. Add 1 microbe for each influence to a card.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.GREENS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const resourceCards = player.getResourceCards(CardResource.MICROBE);
      resourceCards.forEach((card) => {
        player.addResourceTo(card, 1);
      });
      const amount = turmoil.getPlayerInfluence(player);
      if (amount > 0) {
        game.defer(new AddResourcesToCard(player, CardResource.MICROBE, {count: amount}));
      }
    });
  }
}
