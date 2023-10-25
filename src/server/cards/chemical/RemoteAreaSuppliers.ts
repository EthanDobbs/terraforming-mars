import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {Size} from '../../../common/cards/render/Size';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {SpaceType} from '../../../common/boards/SpaceType';
import {Resource} from '../../../common/Resource';
import {all} from '../Options';

export class RemoteAreaSuppliers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.REMOTE_AREA_SUPPLIERS,
      cost: 11,
      tags: [Tag.BUILDING],
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x404',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().emptyTile('normal', {size: Size.SMALL, all}).asterix());
        }),
        description: 'Raise your MC production 1 step for each tile ON MARS, AND NEXT TO NO OTHER TILE.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const spacesOnMars = player.game.board.spaces.filter((space) => space.spaceType !== SpaceType.COLONY);
    const remoteSpaces = spacesOnMars.filter((space) => space.tile !== undefined && player.game.board.getAdjacentSpaces(space).every((space) => space.tile === undefined));
    player.production.add(Resource.MEGACREDITS, remoteSpaces.length);
    return undefined;
  }
}
