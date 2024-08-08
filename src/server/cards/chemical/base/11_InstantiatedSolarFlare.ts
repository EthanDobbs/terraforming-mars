import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {OrOptions} from '../../../inputs/OrOptions';
import {PlayerInput} from '../../../PlayerInput';
import {CardName} from '../../../../common/cards/CardName';
import {SelectOption} from '../../../inputs/SelectOption';
import {CardResource} from '../../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../../deferredActions/RemoveResourcesFromCard';
import {CardRenderer} from '../../render/CardRenderer';
import {all, digit} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class InstantiatedSolarFlare extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.INSTANTIATED_SOLAR_FLARE,
      tags: [Tag.SPACE],
      cost: 11,
      requirements: {tag: Tag.SCIENCE, count: 3},
      behavior: {
        global: {temperature: 2},
        removeAnyPlants: 4,
      },
      victoryPoints: -1,

      metadata: {
        cardNumber: 'xB11',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2).nbsp;
          b.minus().plants(4, {all, digit}).nbsp;
          b.minus().resource(CardResource.ANIMAL, {all});
        }),
        description: 'Requires 3 science tags. Raise the temperature 2 steps. Remove up to 4 plants from any player and remove up to 1 animal from any player.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    if (player.game.isSoloMode()) {
      return undefined;
    }
    const orOptionsAnimals = new RemoveResourcesFromCard(player, CardResource.ANIMAL, 1).execute() as OrOptions;

    const orOptions = new OrOptions();
    if (orOptionsAnimals !== undefined) {
      orOptions.options.push(orOptionsAnimals);
    } else {
      player.game.log('There was nobody to remove animals from.');
      return undefined;
    }
    orOptions.options.push(new SelectOption('Skip removal', 'Confirm').andThen(() => {
      return undefined;
    }));

    return orOptionsAnimals;
  }
}
