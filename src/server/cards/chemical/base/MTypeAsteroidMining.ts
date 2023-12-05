import {IActionCard} from '../../ICard';
import {PlayerInput} from '../../../PlayerInput';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {SelectAmount} from '../../../inputs/SelectAmount';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {digit} from '../../Options';

export class MTypeAsteroidMining extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.M_TYPE_ASTEROID_MINING,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE],
      cost: 26,
      resourceType: CardResource.ASTEROID,

      metadata: {
        cardNumber: 'x035',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 asteroid to this card.', (eb) => {
            eb.empty().startAction.asteroids(1);
          }).br;
          b.or().br;
          b.action('Spend any number of asteroids here to gain triple amount of steel.', (eb) => {
            eb.text('X').asteroids(1).startAction.text('X').steel(3, {digit});
          });
        }),
      },
    });
  }
  public canAct(): boolean {
    return true;
  }
  public action(player: IPlayer) {
    const opts: Array<PlayerInput> = [];

    const addResource = new SelectOption('Add 1 asteroid to this card', 'Add asteroid').andThen( () => {
      player.addResourceTo(this, {log: true});
      return undefined;
    });
    const spendResource = new SelectAmount('Remove any number of asteroids to gain 3 steel per asteroid removed', 'Remove asteroids', 1, this.resourceCount, true)
      .andThen((amount) => this.spendResource(player, amount));

    opts.push(addResource);

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    } else {
      player.addResourceTo(this, {log: true});
      return undefined;
    }

    return new OrOptions(...opts);
  }

  private spendResource(player: IPlayer, amount: number) {
    player.removeResourceFrom(this, amount, {log: false});

    const steelGained = 3 * amount;
    player.steel += steelGained;

    player.game.log('${0} removed ${1} asteroids from ${2} to gain ${3} steel', (b) =>
      b.player(player).number(amount).card(this).number(steelGained));

    return undefined;
  }
}
