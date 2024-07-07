import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IPlayer} from '../../../IPlayer';
import {SelectSpace} from '../../../inputs/SelectSpace';
import {LogHelper} from '../../../LogHelper';
import {IProjectCard} from '../../IProjectCard';
import {BoardType} from '../../../boards/BoardType';
import {Space} from '../../../boards/Space';
import {Resource} from '../../../../common/Resource';
import {Size} from '../../../../common/cards/render/Size';

export class EarlyLandClaim extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.EARLY_LAND_CLAIM,

      behavior: {
        stock: {steel: 2, plants: 2},
      },

      metadata: {
        cardNumber: 'xP04',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you place a tile, gain 2 M€.', (b) => {
            b.emptyTile('normal', {size: Size.SMALL}).startEffect.megacredits(2);
          }).br;
          b.text('3').community().nbsp.steel(2).plants(2);
        }),
        description: 'Place 3 of your player markers on unreserved areas, only you may place tiles there. Gain 2 steel and 2 plants.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.game.board.getNonReservedLandSpaces().length >= 3;
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select first space for claim', player.game.board.getNonReservedLandSpaces()).andThen((space) => {
      space.player = player;
      LogHelper.logBoardTileAction(player, space, 'land claim');
      return new SelectSpace('Select second space for claim', player.game.board.getNonReservedLandSpaces()).andThen((space) => {
        space.player = player;
        LogHelper.logBoardTileAction(player, space, 'land claim');
        return new SelectSpace('Select third space for claim', player.game.board.getNonReservedLandSpaces()).andThen((space) => {
          space.player = player;
          LogHelper.logBoardTileAction(player, space, 'land claim');
          return undefined;
        });
      });
    });
  }
  onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, _space: Space, _boardType: BoardType): void {
    if (activePlayer.id === cardOwner.id) {
      cardOwner.stock.add(Resource.MEGACREDITS, 2, {log: true});
    }
  }
}
