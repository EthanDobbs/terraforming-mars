import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.minus().megacredits(8).nbsp.or().nbsp.minus().energy(3).br.minus().plants(3).nbsp.influence().colon().megacredits(4);
});

export class MagneticFieldFailure extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.MAGNETIC_FIELD_FAILURE,
      description: 'Lose 8 M€ or 3 energy. Lose 3 plants. The player(s) with the most influence gains 4 M€.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.SCIENTISTS,
      renderData: RENDER_DATA,
    });
  }
  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      if (player.plants > 0) {
        player.stock.deduct(Resource.PLANTS, 3, {log: true, from: this.name});
      }
      game.defer(new SimpleDeferredAction(player, () => {
        if (player.energy < 3) {
          player.megaCredits -= 8;
          return undefined;
        }
        const orOptions = new OrOptions();
        orOptions.options.push(new SelectOption('Lose 3 energy', 'Confirm').andThen( () => {
          player.energy -= 3;
          return undefined;
        }));
        orOptions.options.push(new SelectOption('Lose 8 M€', 'Confirm').andThen( () => {
          player.megaCredits -= 8;
          return undefined;
        }));
        return orOptions;
      }));
    });
    const players = game.getPlayers().slice().sort(
      (p1, p2) => turmoil.getPlayerInfluence(p2) - turmoil.getPlayerInfluence(p1),
    );
    const score = turmoil.getPlayerInfluence(players[0]);
    while (players.length > 0 && turmoil.getPlayerInfluence(players[0]) === score) {
      players[0].stock.add(Resource.MEGACREDITS, 4, {log: true, from: this.name});
      players.shift();
    }
  }
}
