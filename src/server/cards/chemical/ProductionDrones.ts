import {IActionCard} from '../ICard';
import {IPlayer} from '../../../server/IPlayer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {SelectOption} from '../../inputs/SelectOption';
import {ALL_RESOURCES} from '../../../common/Resource';
import {OrOptions} from '../../../server/inputs/OrOptions';

export class ProductionDrones extends Card implements IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PRODUCTION_DRONES,
      cost: 12,
      resourceType: CardResource.FLOATER,

      metadata: {
        cardNumber: 'x037',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a floater to this card.', (eb) => {
            eb.empty().startAction.floaters(1);
          }).br;
          b.or().br;
          b.action('Remove a floater from this card to increase (one of) your LOWEST PRODUCTION 1 step.', (eb) => {
            eb.floaters(1).startAction.production((pb) => pb.wild(1)).asterix();
          }).br;
        }),
      },
    });
  }
  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    const opts: Array<SelectOption> = [];

    const addResource = new SelectOption('Add 1 floater to this card', 'Add floater', () => {
      player.addResourceTo(this, {log: true});
      return undefined;
    });
    const spendResource = new SelectOption('Remove a floater from this card to increase your lowest production 1 step', 'Remove floater', () => this.spendResource(player));

    opts.push(addResource);

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    } else {
      player.addResourceTo(this, {log: true});
      return undefined;
    }

    return new OrOptions(...opts);
  }
  private spendResource(player: IPlayer) {
    player.removeResourceFrom(this, 1, {log: false});

    let minimum = player.production.megacredits;
    let lowest: Array<SelectOption> = [];

    ALL_RESOURCES.forEach((resource) => {
      const option = new SelectOption('Increase ' + resource + ' production 1 step', 'Select', () => {
        player.production.add(resource, 1, {log: true});
        return undefined;
      });

      if (player.production[resource] < minimum) {
        lowest = [];
        minimum = player.production[resource];
      }
      if (player.production[resource] === minimum) lowest.push(option);
    });

    const result = new OrOptions();
    result.options = lowest;
    return result;
  }
}
