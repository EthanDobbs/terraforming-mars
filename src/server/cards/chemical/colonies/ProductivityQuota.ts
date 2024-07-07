import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';

export class ProductivityQuota extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 0,
      name: CardName.PRODUCTIVITY_QUOTA,
      type: CardType.EVENT,

      metadata: {
        cardNumber: 'x324',
        renderData: CardRenderer.builder((b) => {
          b.text('ALL').colonyTile().colon().text('+ 1');
        }),
        description: 'Increase the colony tracks of all colony tiles 1 step.',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const activeColonies = player.game.colonies.filter((colony) => colony.isActive);
    activeColonies.forEach((colony) => {
      colony.increaseTrack(1);
    });
    return undefined;
  }
}
