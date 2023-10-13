import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import { CanAffordOptions, IPlayer } from '../../IPlayer';
import { SelectSpace } from '../../inputs/SelectSpace';
import { TileType } from '../../../common/TileType';

export class AquiferRelocation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.AQUIFER_RELOCATION,
      cost: 12,

      metadata: {
        cardNumber: 'x172',
        description: 'Remove an ocean tile from the board then place an ocean tile in a new location.',
        renderData: CardRenderer.builder((b) => {
          b.minus().oceans(1, {all}).nbsp.plus().oceans(1);
        }),
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    return player.game.board.getAvailableSpacesForOcean(player).length > 0; 
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select ocean to remove', player.game.board.spaces.filter((space) => space.tile?.tileType === TileType.OCEAN)).andThen((removedOcean) => {
      player.game.removeTile(removedOcean.id);
      return new SelectSpace('Select a space for the new ocean', player.game.board.getAvailableSpacesForOcean(player).filter((space) => space.id !== removedOcean.id)).andThen((newOcean) => {
        player.game.addOcean(player, newOcean);
        return undefined;
      });
    })
  }
}
