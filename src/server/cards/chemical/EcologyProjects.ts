import {IGlobalEvent} from '../../turmoil/globalEvents/IGlobalEvent';
import {GlobalEvent} from '../../turmoil/globalEvents/GlobalEvent';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {PartyName} from '../../../common/turmoil/PartyName';
import {IGame} from '../../IGame';
import {Turmoil} from '../../turmoil/Turmoil';
import {CardRenderer} from '../render/CardRenderer';
import { Resource } from '../../../common/Resource';
import { SimpleDeferredAction } from '../../deferredActions/DeferredAction';
import { PlayerInput } from '../../PlayerInput';
import { CardResource } from '../../../common/CardResource';
import { SelectOption } from '../../inputs/SelectOption';
import { SelectCard } from '../../inputs/SelectCard';
import { message } from '../../logs/MessageBuilder';
import { OrOptions } from '../../inputs/OrOptions';
import { digit } from '../Options';

const RENDER_DATA = CardRenderer.builder((b) => {
  b.plants(3, {digit}).or().microbes(3, {digit}).or().animals(2, {digit}).br.cards(1).slash().influence();
});

export class EcologyProjects extends GlobalEvent implements IGlobalEvent {
  constructor() {
    super({
      name: GlobalEventName.ECOLOGY_PROJECTS,
      description: 'Gain 3 plants, add 3 microbes to any card, or add 2 animals to any card. Draw a card per influence.',
      revealedDelegate: PartyName.GREENS,
      currentDelegate: PartyName.UNITY,
      renderData: RENDER_DATA,
    });
  }

  public resolve(game: IGame, turmoil: Turmoil) {
    game.getPlayersInGenerationOrder().forEach((player) => {
      game.defer(new SimpleDeferredAction(player, () => {
        const availableMicrobeCards = player.getResourceCards(CardResource.MICROBE);
        const availableAnimalCards = player.getResourceCards(CardResource.ANIMAL);
        const gainPlants = function() {
          player.stock.add(Resource.PLANTS, 3, {log: true});
          return undefined;
        };

        if (availableMicrobeCards.length === 0 && availableAnimalCards.length === 0) {
          return gainPlants();
        }

        const availableActions: Array<PlayerInput> = [];
        const gainPlantsOption = new SelectOption('Gain 3 plants', 'Gain plants').andThen(gainPlants);
        availableActions.push(gainPlantsOption);

        if (availableMicrobeCards.length === 1) {
          const targetMicrobeCard = availableMicrobeCards[0];
          availableActions.push(new SelectOption(message('Add ${0} microbes to ${1}', (b) => b.number(3).card(targetMicrobeCard)), 'Add microbes').andThen(() => {
            player.addResourceTo(targetMicrobeCard, {qty: 3, log: true});
            return undefined;
          }));
       } else if (availableMicrobeCards.length > 1) {
          availableActions.push(new SelectCard('Add 3 microbes to a card',
            'Add microbes',
            availableMicrobeCards)
            .andThen(([card]) => {
              player.addResourceTo(card, {qty: 3, log: true});
              return undefined;
            }));
        }
        if (availableAnimalCards.length === 1) {
          const targetAnimalCard = availableAnimalCards[0];
          availableActions.push(new SelectOption(message('Add ${0} animals to ${1}', (b) => b.number(2).card(targetAnimalCard)), 'Add animals').andThen(() => {
            player.addResourceTo(targetAnimalCard, {qty: 2, log: true});
            return undefined;
          }));
        } else if (availableAnimalCards.length > 1) {
          availableActions.push(new SelectCard('Add 2 animals to a card', 'Add animals', availableAnimalCards)
            .andThen(([card]) => {
            player.addResourceTo(card, {qty: 2, log: true});
              return undefined;
            }));
        }
        return new OrOptions(...availableActions);
      }))
      player.drawCard(turmoil.getPlayerInfluence(player));
    });
  }
}
