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

export class FloatingBiodomes extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.FLOATING_BIODOMES,
      type: CardType.ACTIVE,
      tags: [Tag.PLANT, Tag.VENUS, Tag.JOVIAN],
      cost: 12,
      resourceType: CardResource.FLOATER,
      requirements: {tag: Tag.SCIENCE, count: 2},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x263',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to this card.', (eb) => {
            eb.empty().startAction.floaters(1);
          }).br;
          b.or().br;
          b.action('Spend any number of floater here to gain that amount of plants.', (eb) => {
            eb.text('X').floaters(1).startAction.text('X').plants(1);
          });
        }),
        description: 'Requires that you have 2 science tags.',
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
    const spendResource = new SelectAmount('Remove any number of floaters to gain 1 plant per floater removed', 'Remove floaters', 1, this.resourceCount, true)
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

    player.plants += amount;

    player.game.log('${0} removed ${1} floaters from ${2} to gain ${3} plants', (b) =>
      b.player(player).number(amount).card(this).number(amount));

    return undefined;
  }
}
