import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';
import {digit, all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {CardResource} from '../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';

export class IonizingRadiationBeam extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.IONIZING_RADIATION_BEAM,
      cost: 18,
      tags: [Tag.POWER],
      requirements: {party: PartyName.KELVINISTS},
      victoryPoints: -2,

      behavior: {
        production: {energy: 3, heat: 3},
        removeAnyPlants: 4,
      },

      metadata: {
        cardNumber: 'x413',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.energy(3).br;
            pb.heat(3);
          }).br;
          b.minus().animals(1, {all}).nbsp.minus().plants(4, {digit, all})
        }),
        description: 'Requires that Kelvinists are in power or that you have 2 delegates there. Increase your energy production 3 steps and your heat production 3 steps. Remove up to 4 plants from any player and remove up to 1 animal from any player.',
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
