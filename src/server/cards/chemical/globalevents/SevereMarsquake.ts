import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import { SimpleDeferredAction } from '../../../deferredActions/DeferredAction';
import {OrOptions} from '../../../inputs/OrOptions';
import { SelectOption } from '../../../inputs/SelectOption';
import { digit } from '../../Options';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().megacredits(12).nbsp.or().nbsp.minus().steel(4, {digit}).br.influence().colon().cards(1);
});

export class SevereMarsquake extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.SEVERE_MARSQUAKE,
      description: 'Lose 12 M€ or 4 steel. The player(s) with the most influence draws a card.',
      revealedDelegate: PartyName.KELVINISTS,
      currentDelegate: PartyName.MARS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      game.defer(new SimpleDeferredAction(player, () => {
        if (player.steel < 4) {
          player.megaCredits -= 12;
          return undefined
        }
        const orOptions = new OrOptions();
        orOptions.options.push(new SelectOption('Lose 4 steel', 'Confirm').andThen( () => {
          player.steel -= 4;
          return undefined;
        }));
        orOptions.options.push(new SelectOption('Lose 12 M€', 'Confirm').andThen( () => {
          player.megaCredits -= 12;
          return undefined;
        }));
        return orOptions
      }))
    });
    const players = game.getPlayers().slice().sort(
      (p1, p2) => turmoil.getPlayerInfluence(p2) - turmoil.getPlayerInfluence(p1),
    );
    const score = turmoil.getPlayerInfluence(players[0]);
      while (players.length > 0 && turmoil.getPlayerInfluence(players[0]) === score) {
        players[0].drawCard(1);
        players.shift();
      }
  }
}
