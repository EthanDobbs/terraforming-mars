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
  b.megacredits(3).slash().tag(Tag.ANIMAL).influence({size: Size.SMALL});
});

export class EcologicalSupport extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ECOLOGICAL_SUPPORT,
      description: 'Gain 3 M€ for each animal tag you have (max 5) and influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.GREENS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.min(5, player.tags.count(Tag.ANIMAL, 'raw')) + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount * 3, {log: true, from: this.name});
    });
  }
}
