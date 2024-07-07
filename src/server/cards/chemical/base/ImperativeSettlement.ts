import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {TileType} from '../../../../common/TileType';
import {Space} from '../../../boards/Space';
import {CardName} from '../../../../common/cards/CardName';
import {AdjacencyBonus} from '../../../ares/AdjacencyBonus';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {Resource} from '../../../../common/Resource';

export class ImperativeSettlement extends Card implements IProjectCard {
  constructor(
    name = CardName.IMPERATIVE_SETTLEMENT,
    cost = 22,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata = {
      cardNumber: 'x081',
      renderData: CardRenderer.builder((b) => {
        b.effect('Whenever any tile is placed adjacent to this city, increase your M€ production 2 steps.', (eb) => {
          eb.emptyTile('normal', {all}).tile(TileType.IMPERATIVE_SETTLEMENT, false).startEffect.production((pb) => pb.megacredits(2));
        }).br;
        b.production((pb) => pb.minus().energy(1)).nbsp.tile(TileType.IMPERATIVE_SETTLEMENT, false);
      }),
      description: 'Decrease your energy productuion 1 step and place this city tile.',
    },
  ) {
    super({
      type: CardType.ACTIVE,
      name,
      tags: [Tag.CITY, Tag.BUILDING],
      cost,
      adjacencyBonus,
      metadata,
      behavior: {
        production: {energy: -1},
        tile: {
          type: TileType.IMPERATIVE_SETTLEMENT,
          on: 'city',
          title: 'Select space for special city tile',
          adjacencyBonus: adjacencyBonus,
        },
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, player: IPlayer, space: Space) {
    const usedSpace = player.game.board.getSpaceByTileCard(this.name);
    if (usedSpace !== undefined && space.tile?.tileType !== TileType.MARS_NOMADS) {
      if (player.game.board.getAdjacentSpaces(space).includes(usedSpace)) {
        cardOwner.production.add(Resource.MEGACREDITS, 2);
      }
    }
  }
}
