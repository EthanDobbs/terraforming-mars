import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {Tag} from '../../../common/cards/Tag';
import {PlayerInput} from '../../PlayerInput';
import {CardName} from '../../../common/cards/CardName';
import {SelectOption} from '../../inputs/SelectOption';
import {CardResource} from '../../../common/CardResource';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {Size} from '../../../common/cards/render/Size';

export class Parasite extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PARASITE,
      tags: [Tag.MICROBE],
      cost: 1,
      behavior: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1},
      },

      metadata: {
        cardNumber: 'x169',
        renderData: CardRenderer.builder((b) => {
          b.microbes(1).asterix().br;
          b.nbsp.minus().microbes(3, {all, digit}).nbsp.or(Size.SMALL).nbsp.minus().animals(1, {all});
        }),
        description: 'Add 1 microbe to ANOTHER card. Remove up to 3 microbes or 1 animal from any player.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    if (player.game.isSoloMode()) {
      return undefined;
    }

    const orOptionsAnimals = new RemoveResourcesFromCard(player, CardResource.ANIMAL, 1, false, false).execute() as OrOptions;
    const orOptionsMicrobes = new RemoveResourcesFromCard(player, CardResource.MICROBE, 3, false, false).execute() as OrOptions;
    const removeAnimals = orOptionsAnimals !== undefined ?
      orOptionsAnimals.options[0] :
      undefined;
    const removeMicrobes = orOptionsMicrobes !== undefined ?
      orOptionsMicrobes.options[0] :
      undefined;

    // If no other player has resources to remove
    // assume player will remove nothing from themselves
    if (removeAnimals === undefined && removeMicrobes === undefined) {
      player.game.log('There was nobody to remove resources from.');
      return undefined;
    }

    const orOptions = new OrOptions();
    if (removeAnimals !== undefined) {
      orOptions.options.push(removeAnimals);
    }
    if (removeMicrobes !== undefined) {
      orOptions.options.push(removeMicrobes);
    }
    orOptions.options.push(new SelectOption('Skip removal', 'Confirm')
      .andThen(() => {return undefined})
    );
    
    return orOptions;
  }
}
