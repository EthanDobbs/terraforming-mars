import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IGame} from '../../../IGame';
import {Turmoil} from '../../../turmoil/Turmoil';
import {CardRenderer} from '../../render/CardRenderer';
import { Resource } from '../../../../common/Resource';
import { SimpleDeferredAction } from '../../../deferredActions/DeferredAction';
import { CardResource } from '../../../../common/CardResource';
import { SelectOption } from '../../../inputs/SelectOption';
import { SelectCard } from '../../../inputs/SelectCard';
import { OrOptions } from '../../../inputs/OrOptions';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.megacredits(-8).nbsp.or().nbsp.minus().microbes(2).nbsp.plants(1).slash().influence();
});

export class EcosystemDisruption extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ECOSYSTEM_DISRUPTION,
      description: 'Lose 8 M€ or remove 2 microbes from any card. Gain 1 plant per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.GREENS,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      game.defer(new SimpleDeferredAction(player, () => {
        const microbeCards = player.getCardsWithResources(CardResource.MICROBE).filter((card) => (card.resourceCount ?? 0) >= 2);
        const selectAction = new OrOptions();
        const payMC = new SelectOption('Lose up to 8 M€', 'Lose M€').andThen(() => {
          player.stock.deduct(Resource.MEGACREDITS, 8, {log: true, from: this.name});
          return undefined;
        });
        const removeMicrobes = new SelectCard('Select card to remove 2 microbes from', 'Remove microbes', microbeCards).andThen(([card]) => {
          player.removeResourceFrom(card, 2);
          return undefined;
        });
        selectAction.options.push(payMC, removeMicrobes);
        if (microbeCards.length === 0) {
          payMC.cb(undefined);
         return undefined;
        }
        return selectAction;
      }))
      player.stock.add(Resource.PLANTS, turmoil.getPlayerInfluence(player), {log: true, from: this.name});
    });
  }
}
