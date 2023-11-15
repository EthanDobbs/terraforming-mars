import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { Resource } from '../../../common/Resource';
import {played} from '../Options';
import { Tag } from '../../../common/cards/Tag';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(2).slash().plants(1, {played}).influence({size: Size.SMALL});
});

export class FoodSupply extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.FOOD_SUPPLY,
      description: 'Gain 2 M€ for each plant tag you have (max 5) and influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.min(5, player.tags.count(Tag.PLANT, 'raw')) + turmoil.getPlayerInfluence(player);
      player.stock.add(Resource.MEGACREDITS, amount * 2, {log: true, from: this.name});
    });
  }
}
