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

export class ElectroplaqueMicrobes extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.M_TYPE_ASTEROID_MINING,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 9,
      resourceType: CardResource.MICROBE,

      metadata: {
        cardNumber: 'x049',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 microbes to this card.', (eb) => {
            eb.empty().startAction.microbes(2);
          }).br;
          b.or().br;
          b.action('Spend any number of microbes here to gain that amount of energy.', (eb) => {
            eb.text('x').microbes(1).startAction.text('x').energy(1);
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

    const addResource = new SelectOption('Add 2 microbes to this card', 'Add microbes', () => {
      player.addResourceTo(this, 2);
      return undefined;
    });
    const spendResource = new SelectAmount('Remove any number of microbes to gain 1 energy per microbe removed', 'Remove microbes', (amount: number) => this.spendResource(player, amount), 1, this.resourceCount, true);

    opts.push(addResource);

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    } else {
      player.addResourceTo(this, 2);
      return undefined;
    }

    return new OrOptions(...opts);
  }

  private spendResource(player: IPlayer, amount: number) {
    player.removeResourceFrom(this, amount, {log: false});

    player.energy += amount;

    player.game.log('${0} removed ${1} microbes from ${2} to gain ${3} energy', (b) =>
      b.player(player).number(amount).card(this).number(amount));

    return undefined;
  }
}
