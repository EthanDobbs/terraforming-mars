import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {OrOptions} from '../../../inputs/OrOptions';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {SelectOption} from '../../../inputs/SelectOption';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {all, digit} from '../../Options';
import {message} from '../../../logs/MessageBuilder';

export class AcidRain extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ACID_RAIN,
      cost: 0,

      metadata: {
        cardNumber: 'xCE11',
        renderData: CardRenderer.builder((b) => {
          b.minus().steel(3, {all, digit}).nbsp.or(Size.SMALL).nbsp;
          b.minus().plants(3, {all, digit});
        }),
        description: 'Remove up to 3 steel or 3 plants from any player',
      },
    });
  }

  private title(amount: number, type: string, target: IPlayer) {
    return message('Remove ${0} ${1} from ${2}', (b) => b.number(amount).string(type).player(target));
  }

  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) return undefined;

    const availableActions = new OrOptions();

    player.getOpponents().forEach((target) => {
      if (target.steel > 0 && !target.alloysAreProtected()) {
        const amountRemoved = Math.min(3, target.steel);
        const optionTitle = this.title(amountRemoved, 'steel', target);
        availableActions.options.push(new SelectOption(optionTitle).andThen(() => {
          target.stock.deduct(Resource.STEEL, 3, {log: true, from: player});
          return undefined;
        }));
      }

      if (target.plants > 0) {
        const amountRemoved = Math.min(3, target.steel);
        const optionTitle = this.title(amountRemoved, 'plants', target);
        availableActions.options.push(new SelectOption(optionTitle).andThen(() => {
          target.stock.deduct(Resource.PLANTS, 3, {log: true, from: player});
          return undefined;
        }));
      }
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

