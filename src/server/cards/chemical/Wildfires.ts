import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {PlayerInput} from '../../PlayerInput';
import {CardName} from '../../../common/cards/CardName';
import {SelectOption} from '../../inputs/SelectOption';
import {CardResource} from '../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';

export class Wildfires extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.WILDFIRES,
      cost: 7,
      behavior: {
        stock: {heat: 4},
        removeAnyPlants: 4,
      },

      requirements: {oxygen: 6},
      metadata: {
        cardNumber: 'x002',
        renderData: CardRenderer.builder((b) => {
          b.heat(4);
          b.nbsp.minus().plants(4, {all, digit});
          b.nbsp.minus().animals(2, {all, digit});
        }),
        description: 'Gain 4 heat, then remove up to 4 plants from any player and remove up to 2 animals from any player.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    if (player.game.isSoloMode()) {
      return undefined;
    }

    const orOptionsAnimals = new RemoveResourcesFromCard(player, CardResource.ANIMAL, 2, false, false).execute() as OrOptions;
    const removeAnimals = orOptionsAnimals !== undefined ?
      orOptionsAnimals.options[0] :
      undefined;

    // If no other player has resources to remove
    // assume player will remove nothing from themselves
    if (removeAnimals === undefined) {
      player.game.log('There was nobody to remove animals from.');
      return undefined;
    }

    const orOptions = new OrOptions();
    if (removeAnimals !== undefined) {
      orOptions.options.push(removeAnimals);
    }
    orOptions.options.push(new SelectOption('Skip removal', 'Confirm', () => {
      return undefined;
    }));

    return orOptions;
  }
}
