import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {message} from '../../logs/MessageBuilder';

export class FailedSpaceMission extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.FAILED_SPACE_MISSION,
      tags: [Tag.SPACE],
      cost: 0,

      metadata: {
        cardNumber: 'x171',
        description: 'Remove up to 2 M€ and 2 titanium from any player.',
        renderData: CardRenderer.builder((b) => {
          b.minus().megacredits(2, {all}).titanium(2, {all});
        }),
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) return undefined;

    const availablePlayerTargets = player.game.getPlayers().filter((p) => p.id !== player.id);
    const availableActions = new OrOptions();
    availablePlayerTargets.forEach((target) => {
        const optionTitle = message('Remove resources from ${0}', (b) => b.player(target))
        availableActions.options.push(new SelectOption(optionTitle).andThen(() => {
          target.stock.deduct(Resource.MEGACREDITS, 2, {log: true, from: player});
          if (!target.alloysAreProtected()) target.stock.deduct(Resource.TITANIUM, 2, {log: true, from: player});
          return undefined;
        }));
      });
    if (availableActions.options.length > 0) {
      availableActions.options.push(new SelectOption('Do not remove resource').andThen(() => {
        return undefined;
      }));
      return availableActions;
    }
    return undefined;
  }
}
