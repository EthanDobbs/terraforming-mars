import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { IPlayer } from '../../IPlayer';
import { CanAffordOptions } from '../../IPlayer';
import { Board } from '../../boards/Board';
import { Space } from '../../boards/Space';
import { SelectSpace } from '../../inputs/SelectSpace';
import { CardResource } from '../../../common/CardResource';

export class FreshwaterLake extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FRESHWATER_LAKE,
      cost: 25,
      requirements: {temperature: 0},
      victoryPoints: 1,

      behavior: {
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 2},
      },

      metadata: {
        cardNumber: 'x094',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).asterix().nbsp.animals(2).asterix();
        }),
        description: 'Place an ocean tile ON LAND, AND NEXT TO NO OTHER OCEAN. Add 2 animals to ANOTHER card.',
      },
    });
  }
  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesOnLand(player, canAffordOptions).filter((space) => player.game.board.getAdjacentSpaces(space).filter(Board.isOceanSpace).length === 0);
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions) {
    if (!player.game.canAddOcean()) return false;
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space on land next to no other ocean', this.getAvailableSpaces(player))
      .andThen((requestedSpace: Space) => {
        player.game.addOcean(player, requestedSpace);
        return undefined;
      });
  }
}
