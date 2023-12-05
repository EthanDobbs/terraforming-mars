import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectColony} from '../../../inputs/SelectColony';
import {IColony} from '../../../colonies/IColony';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';

export class CoordinatedRaidChemical extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 5,
      name: CardName.COORDINATED_RAID_CHEMICAL,
      type: CardType.EVENT,

      metadata: {
        cardNumber: 'x313',
        renderData: CardRenderer.builder((b) => b.trade().asterix()),
        description: 'Trade for free. Collect the colony bonus for every colony on this tile. Other players do not get their colony bonuses from this action.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }

  public override bespokePlay(player: IPlayer) {
    const tradeableColonies = ColoniesHandler.tradeableColonies(player.game);
    return new SelectColony('Select colony tile for trade', 'trade', tradeableColonies)
      .andThen((colony: IColony) => {
        colony.trade(player, {selfishTrade: true});
        return undefined;
      });
  }
}
