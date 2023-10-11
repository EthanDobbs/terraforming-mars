import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { IPlayer } from '../../IPlayer';
import { CanAffordOptions } from '../../IPlayer';
import { Space } from '../../boards/Space';
import { SelectSpace } from '../../inputs/SelectSpace';
import { Tag } from '../../../common/cards/Tag';

export class MunicipalReservior extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MUNICIPAL_RESERVIOR,
      cost: 10,
      tags: [Tag.BUILDING],

      behavior: {
        production: {megacredits: 1}
      },

      metadata: {
        cardNumber: 'x097',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).asterix().nbsp.production((pb) => pb.megacredits(1));
        }),
        description: 'Place an ocean tile NEXT TO 3 OTHER TILES, THIS TILE MAY BE PLACED ON AN AREA NOT RESERVED FOR AN OCEAN. Raise your MC production 1 step. ',
      },
    });
  }
  private adjacencyTest(player: IPlayer, space: Space){
    return player.game.board.getAdjacentSpaces(space).filter((adjacentSpace) => adjacentSpace.tile !== undefined).length >= 3;
  }
  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesForOcean(player).filter((space) => this.adjacencyTest(player, space))
      .concat(player.game.board.getAvailableSpacesOnLand(player, canAffordOptions).filter((space) => this.adjacencyTest(player, space)));
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions) {
    if (!player.game.canAddOcean()) return false;
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space next to 3 other tiles', this.getAvailableSpaces(player))
      .andThen((requestedSpace: Space) => {
        player.game.addOcean(player, requestedSpace);
        return undefined;
      });
  }
}
