import {IActionCard} from '../ICard';
import {PlayerInput} from '../../PlayerInput';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {SelectAmount} from '../../inputs/SelectAmount';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {multiplier} from '../Options';

export class FloatingColony extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.FLOATING_COLONY,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE],
      cost: 20,
      requirements: {floaters: 3},
      resourceType: CardResource.FLOATER,

      metadata: {
        cardNumber: 'x328',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to ANY card.', (eb) => {
            eb.empty().startAction.floaters(1).asterix();
          }).br;
          b.or().br;
          b.action('Spend any number of floaters here to gain triple amount of MC.', (eb) => {
            eb.text('X').floaters(1).startAction.megacredits(3, {multiplier});
          }).br;
          b.colonies(1);
        }),
        description: 'Requires that you have 3 floaters. Place a colony.'
      },
    });
  }
  public canAct(): boolean {
    return true;
  }
  public action(player: IPlayer) {
    const opts: Array<PlayerInput> = [];

    const addResource = new SelectOption('Add 1 floater to this card', 'Add floater').andThen( () => {
      player.addResourceTo(this, {log: true});
      return undefined;
    });
    const spendResource = new SelectAmount('Remove any number of floaters to gain 3MC per floater removed', 'Remove floaters', 1, this.resourceCount, true)
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

    const mcGained = 3 * amount;
    player.megaCredits += mcGained;

    player.game.log('${0} removed ${1} asteroids from ${2} to gain ${3} steel', (b) =>
      b.player(player).number(amount).card(this).number(mcGained));

    return undefined;
  }
}
