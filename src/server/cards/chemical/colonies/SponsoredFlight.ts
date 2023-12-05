import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectColony} from '../../../inputs/SelectColony';
import {IColony} from '../../../colonies/IColony';
import {Tag} from '../../../../common/cards/Tag';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';

export class SponsoredFlight extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 1,
      name: CardName.SPONSORED_FLIGHT,
      type: CardType.EVENT,
      tags: [Tag.EARTH, Tag.SPACE],
      requirements: {tag: Tag.EARTH, count: 1},

      metadata: {
        cardNumber: 'x314',
        renderData: CardRenderer.builder((b) => b.trade()),
        description: 'Requires 1 Earth tag. Trade for free.',
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
        colony.trade(player);
        return undefined;
      });
  }
}
