import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {IColony} from '../../../colonies/IColony';

export class ColonySuppliers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.COLONY_SUPPLIERS,
      cost: 10,

      behavior: {
        colonies: {addTradeFleet: 1},
      },

      metadata: {
        cardNumber: 'x340',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you trade, gain 1 M€ for each colony on the tile you trade with.', (eb) => {
            eb.trade().startEffect.megacredits(1).slash().colonies(1).asterix();
          }).br;
          b.tradeFleet();
        }),
        description: 'Gain a trade fleet.'
      },
    });
  }

  public onTrade(cardOwner: IPlayer, activePlayer: IPlayer, colony: IColony) {
    if (cardOwner.id === activePlayer.id) {
      cardOwner.stock.add(Resource.MEGACREDITS, colony.colonies.length, {log: true});
    }
  }
}
