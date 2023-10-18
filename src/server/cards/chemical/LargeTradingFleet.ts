import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import {SelectColony} from '../../inputs/SelectColony';
import {IColony} from '../../colonies/IColony';
import {Tag} from '../../../common/cards/Tag';

export class LargeTradingFleet extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 10,
      name: CardName.LARGE_TRADING_FLEET,
      type: CardType.EVENT,
      tags: [Tag.SPACE],

      behavior: {
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x315',
        renderData: CardRenderer.builder((b) => {
          b.trade().colon().text('+ 1').nbsp.cards(1);
        }),
        description: 'Trade for free, first increasing the colony track of the tile you trade with one step. Draw a card.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }

  public override bespokePlay(player: IPlayer) {
    const activeColonies = player.game.colonies.filter((colony) => colony.isActive);
    return new SelectColony('Select colony tile for trade', 'trade', activeColonies)
      .andThen((colony: IColony) => {
        colony.trade(player, {}, 1);
        return undefined;
      });
  }
}
