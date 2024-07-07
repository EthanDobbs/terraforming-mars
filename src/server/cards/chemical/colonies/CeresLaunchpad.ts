import {IActionCard} from '../../ICard';
import {PlayerInput} from '../../../PlayerInput';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {SelectColony} from '../../../inputs/SelectColony';
import {IColony} from '../../../colonies/IColony';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';

export class CeresLaunchpad extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.CERES_LAUNCHPAD,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE],
      cost: 23,
      resourceType: CardResource.ASTEROID,
      victoryPoints: 2,

      behavior: {
        colonies: {addTradeFleet: 1},
      },

      metadata: {
        cardNumber: 'x335',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 asteroid to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.ASTEROID);
          }).br;
          b.or().br;
          b.action('Spend 1 asteroid to trade, first increasing the colony track one step.', (eb) => {
            eb.resource(CardResource.ASTEROID).startAction.trade().colon().text('+ 1');
          }).br;
          b.tradeFleet();
        }),
        description: 'Gain a trade fleet.',
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
    const tradeableColonies = ColoniesHandler.tradeableColonies(player.game);
    const spendResource = new SelectColony('Select colony tile for trade', 'trade', tradeableColonies)
      .andThen((colony: IColony) => {
        this.resourceCount -= 1;
        colony.trade(player, {}, 1);
        return undefined;
      });

    opts.push(addResource);

    if (this.resourceCount > 0 && player.colonies.getFleetSize() > player.colonies.tradesThisGeneration) {
      opts.push(spendResource);
    } else {
      player.addResourceTo(this, {log: true});
      return undefined;
    }

    return new OrOptions(...opts);
  }
}
