import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectColony} from '../../../inputs/SelectColony';
import {IColony} from '../../../colonies/IColony';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';

export class OuterSolarMission extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 12,
      name: CardName.OUTER_SOLAR_MISSION,
      type: CardType.EVENT,
      tags: [Tag.SPACE],

      behavior: {
        stock: {titanium: 2},
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.JOVIAN, count: 2},
      },

      metadata: {
        cardNumber: 'x316',
        renderData: CardRenderer.builder((b) => {
          b.trade().br;
          b.titanium(2).floaters(2, {secondaryTag: Tag.JOVIAN});
        }),
        description: 'Trade for free. Gain 2 titanium and add 2 floaters to any Jovian card.',
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
