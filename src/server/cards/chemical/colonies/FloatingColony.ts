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
import {multiplier} from '../../Options';
import {SelectCard} from '../../../inputs/SelectCard';

export class FloatingColony extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.FLOATING_COLONY,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE],
      cost: 20,
      requirements: {floaters: 3},
      resourceType: CardResource.FLOATER,

      behavior: {
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x328',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to ANY card.', (eb) => {
            eb.empty().startAction.floaters(1).asterix();
          }).br;
          b.or().br;
          b.action('Spend any number of floaters here to gain triple amount of M€.', (eb) => {
            eb.text('X').floaters(1).startAction.megacredits(3, {multiplier});
          }).br;
          b.colonies(1);
        }),
        description: 'Requires 3 floaters. Place a colony.'
      },
    });
  }
  public canAct(): boolean {
    return true;
  }
  public action(player: IPlayer) {
    const opts: Array<PlayerInput> = [];
    const resourceCards = player.getResourceCards(this.resourceType);
    const addResource = new SelectOption('Add 1 floater to any card', 'Add floater').andThen( () => {
      if (resourceCards.length === 1) {
        player.addResourceTo(this, 1);
        return undefined;
      }
      return new SelectCard(
        'Select card to add 1 floater',
        'Add floater',
        resourceCards)
        .andThen(
          ([card]) => {
            player.addResourceTo(card, 1);
            return undefined;
          },
        );
    });
    const spendResource = new SelectAmount('Remove any number of floaters to gain 3 M€ per floater removed', 'Remove floaters', 1, this.resourceCount, true)
      .andThen((amount) => this.spendResource(player, amount));

    opts.push(addResource);

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    }

    return new OrOptions(...opts);
  }

  private spendResource(player: IPlayer, amount: number) {
    player.removeResourceFrom(this, amount, {log: false});

    const mcGained = 3 * amount;
    player.megaCredits += mcGained;

    player.game.log('${0} removed ${1} asteroids from ${2} to gain ${3} M€', (b) =>
      b.player(player).number(amount).card(this).number(mcGained));

    return undefined;
  }
}
