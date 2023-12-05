import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class RemoteMiningBase extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 13,
      tags: [Tag.SPACE],
      name: CardName.REMOTE_MINING_BASE,
      type: CardType.ACTIVE,

      metadata: {
        cardNumber: 'x346',
        renderData: CardRenderer.builder((b) => {
          b.action('Move one of your trade fleets from the Trade Fleets Tile to this card to gain 2 titanium. Fleets on this card may no longer trade, and return to the Trade Fleets Tile during the Solar Phase.', (eb) => {
            eb.tradeFleet().asterix().startAction.titanium(2);
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
    player.stock.add(Resource.TITANIUM, 2, {log: true});
    return undefined;
  }
}
