import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {SelectCard} from '../../../inputs/SelectCard';
import {PlayerInput} from '../../../PlayerInput';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class OxygenShipment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.OXYGEN_SHIPMENT,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 22,

      behavior: {
        global: {oxygen: 2},
      },

      metadata: {
        cardNumber: 'xB18',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(2).br;
          b.resource(CardResource.MICROBE, {amount: 3, digit}).asterix().or();
          b.resource(CardResource.ANIMAL, {amount: 2, digit}).asterix();
        }),
        description: 'Raise the oxygen 2 steps and add 3 microbes or 2 animals to ANOTHER card.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): undefined | PlayerInput {
    const availableMicrobeCards = player.getResourceCards(CardResource.MICROBE);
    const availableAnimalCards = player.getResourceCards(CardResource.ANIMAL);

    const availableActions: Array<PlayerInput> = [];

    if (availableMicrobeCards.length === 1) {
      const targetMicrobeCard = availableMicrobeCards[0];
      availableActions.push(new SelectOption('Add 3 microbes to ' + targetMicrobeCard.name, 'Add microbes').andThen( () => {
        player.addResourceTo(targetMicrobeCard, {qty: 3, log: true});
        return undefined;
      }));
    } else if (availableMicrobeCards.length > 1) {
      availableActions.push(new SelectCard('Add 3 microbes to a card',
        'Add microbes',
        availableMicrobeCards).andThen( ([card]) => {
        player.addResourceTo(card, {qty: 3, log: true});
        return undefined;
      }));
    }

    if (availableAnimalCards.length === 1) {
      const targetAnimalCard = availableAnimalCards[0];
      availableActions.push(new SelectOption('Add 2 animals to ' + targetAnimalCard.name, 'Add animals').andThen( () => {
        player.addResourceTo(targetAnimalCard, {qty: 2, log: true});
        return undefined;
      }));
    } else if (availableAnimalCards.length > 1) {
      availableActions.push(new SelectCard('Add 2 animals to a card', 'Add animals', availableAnimalCards).andThen( ([card]) => {
        player.addResourceTo(card, {qty: 2, log: true});
        return undefined;
      }));
    }
    if (availableActions.length === 0) {
      return undefined;
    }

    return new OrOptions(...availableActions);
  }
}
