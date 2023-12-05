import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {Resource} from '../../../../common/Resource';

export class AuthoritarianState extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.AUTHORITARIAN_STATE,
      cost: 14,
      tags: [Tag.CITY, Tag.BUILDING],
      victoryPoints: -2,

      behavior: {
        production: {megacredits: 3, energy: -1},
        city: {},
      },

      metadata: {
        cardNumber: 'x411',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          });
          b.city().asterix().br;
          b.text('Steal').nbsp.megacredits(3, {all}).slash().emptyTile('normal', {size: Size.SMALL, all}).asterix();
        }),
        description: 'Decrease your energy production 1 step and increase your M€ production 3 steps. Place a city tile, then, for each adjacent tile, steal 3 M€ from the owner of that tile.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const usedSpace = player.game.board.getSpaceByTileCard(this.name);
    if (usedSpace !== undefined) {
      player.game.board.getAdjacentSpaces(usedSpace).forEach((space) => {
        space.player?.stock.deduct(Resource.MEGACREDITS, 3, {log: true, from: player, stealing: true});
        return undefined;
      });
    }
    return undefined;
  }
}
