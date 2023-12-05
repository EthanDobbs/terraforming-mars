import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import { digit } from '../../Options';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.cards(8, {digit}).colon().megacredits(-8).nbsp.cards(1).slash().influence();
});

export class RevisedPatentLaw extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.REVISED_PATENT_LAW,
      description: 'Lose 8 M€ if you have 8 or more cards in hand. Then, draw a card per influence.',
      revealedDelegate: PartyName.REDS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.cardsInHand.length >= 8){
        player.stock.deduct(Resource.MEGACREDITS, 8, {log: true, from: this.name});
      }
      player.drawCard(turmoil.getPlayerInfluence(player));
    });
  }
}
