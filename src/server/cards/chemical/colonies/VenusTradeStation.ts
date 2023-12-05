import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class VenusTradeStation extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 13,
      tags: [Tag.VENUS],
      name: CardName.VENUS_TRADE_STATION,
      type: CardType.ACTIVE,

      metadata: {
        cardNumber: 'x348',
        renderData: CardRenderer.builder((b) => {
          b.action('Move one of your trade fleets from the Trade Fleets Tile to this card to increase your energy production 1 step. Fleets on this card may no longer trade, and return to the Trade Fleets Tile during the Solar Phase.', (eb) => {
            eb.tradeFleet().asterix().startAction.production((pb) => pb.energy(1));
          }).br;
        }),
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }
  public action(player: IPlayer) {
    player.colonies.tradesThisGeneration++;
    player.production.add(Resource.ENERGY, 1, {log: true});
    return undefined;
  }
}
