import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardRenderer} from '../render/CardRenderer';
import {IColony} from '../../colonies/IColony';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {SelectResource} from '../../inputs/SelectResource';
import {Units} from '../../../common/Units';
import {Tag} from '../../../common/cards/Tag';

export class TradeDealLeverage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TRADE_DEAL_LEVERAGE,
      cost: 8,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x342',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you trade, gain 1 standard resource.', (eb) => {
            eb.trade().startEffect.wild(1);
          }).br;
        }),
      },
    });
  }

  public onTrade(player: IPlayer, _colony: IColony) {
    player.game.defer(new SimpleDeferredAction(player, () => {
      return new SelectResource('Select resource to gain', Units.keys, (type) => {
        player.stock.add(Units.ResourceMap[type], 1, {log: true});
        return undefined;
      })
    }));
  }
}
