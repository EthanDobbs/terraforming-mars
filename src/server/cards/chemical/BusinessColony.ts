import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {Size} from '../../../common/cards/render/Size';
import {IPlayer, CanAffordOptions} from '@/server/IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {BuildColony} from '../../deferredActions/BuildColony';
import {Resource} from '../../../common/Resource';

export class BusinessColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BUSINESS_COLONY,
      tags: [Tag.SPACE],
      cost: 20,

      metadata: {
        cardNumber: 'x350',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).production((pb) => pb.megacredits(1).slash().colonies(1, {size: Size.SMALL}));
        }),
        description: 'Place a colony, then increase your M€ production 1 step for each colony you own.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    return player.colonies.getPlayableColonies().length > 0;
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    player.game.defer(new BuildColony(player).andThen(() => {
      player.production.add(Resource.MEGACREDITS, player.getColoniesCount(), {log: true});
      return undefined;
    }))
  return undefined;
  }
}
