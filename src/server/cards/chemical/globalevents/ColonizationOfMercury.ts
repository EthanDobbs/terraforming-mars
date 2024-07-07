import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';
import {Size} from '../../../../common/cards/render/Size';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.production((pb) => pb.megacredits(1)).slash().tag(Tag.SPACE, 2).influence({size: Size.SMALL});
});

export class ColonizationOfMercury extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.COLONIZATION_OF_MERCURY,
      description: 'Increase your M€ production 1 step for every 2 space tags you have (no limit), influence counts as space tags.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      const amount = Math.floor((player.tags.count(Tag.SPACE, 'raw') + turmoil.getPlayerInfluence(player)) / 2);
      player.production.add(Resource.MEGACREDITS, amount, {log: true, from: this.name});
    });
  }
}
