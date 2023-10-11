import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { SelectSpace } from '../../inputs/SelectSpace';
import { IPlayer } from '../../IPlayer';
import { CanAffordOptions } from '../../IPlayer';
import { Board } from '../../boards/Board';
import { Space } from '../../boards/Space';

export class Irrigation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.IRRIGATION,
      cost: 18,
      tags: [Tag.PLANT, Tag.BUILDING],
      requirements: {oceans: 6},

      behavior: {
        production: {plants: 1},
      },

      metadata: {
        cardNumber: 'x133',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).nbsp.greenery().asterix();
        }),
        description: 'Requires 6 or more oceans. Raise your plant production 1 step. Place a greenery tile ADJACENT TO AN OCEAN',
      },
    });
  }
  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesOnLand(player, canAffordOptions)
      .filter((space) => player.game.board.getAdjacentSpaces(space).filter(Board.isOceanSpace).length > 0);
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions): boolean {
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space next to ocean for greenery tile', this.getAvailableSpaces(player))
      .andThen((requestedSpace: Space) => {
        player.game.addGreenery(player, requestedSpace);
        return undefined;
      });
  }
}
