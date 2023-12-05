import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {Tag} from '../../../../common/cards/Tag';
import { played, digit } from '../../Options';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.science(5, {played, digit}).influence({size: Size.SMALL}).colon().cards(2);
});

export class IntellectualistMovements extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.INTELLECTUALIST_MOVEMENTS,
      description: 'Draw 2 cards if you have 5 or more science tags. Influence counts as science tags.',
      revealedDelegate: PartyName.MARS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.tags.count(Tag.SCIENCE, 'raw') + turmoil.getPlayerInfluence(player) >= 5) {
        player.drawCard(2);
      }
    });
  }
}
