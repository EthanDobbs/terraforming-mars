import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {CanAffordOptions, IPlayer} from '../../../IPlayer';
import {OrOptions} from '../../../inputs/OrOptions';
import {ALL_RESOURCES} from '../../../../common/Resource';
import {PlayerInput} from '../../../PlayerInput';
import {SelectOption} from '../../../inputs/SelectOption';
import {Tag} from '../../../../common/cards/Tag';
import { message } from '../../../logs/MessageBuilder';

export class ProjectAdvancement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PROJECT_ADVANCEMENT,
      cost: 5,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x205',
        description: 'Increase any production that YOU\'VE ALREADY RAISED THIS GENERATION.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.wild(1)).asterix();
        }),
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
      return ALL_RESOURCES.some((resource) => player.generationData.hasRaisedProduction[resource] === true);
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const orOptions = new OrOptions();
    ALL_RESOURCES.forEach((resource) => {
      if (player.generationData.hasRaisedProduction[resource]) {
        orOptions.options.push(new SelectOption(message('Raise ${0} production', (b) => b.string(resource)), 'Select').andThen( () => {
          player.production.add(resource, 1, {log: true});
          return undefined;
        }))
      }
    })
    return orOptions;
  }
}
