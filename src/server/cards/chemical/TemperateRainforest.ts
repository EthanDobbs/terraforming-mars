import {IProjectCard} from '../IProjectCard';
import {Space} from '../../boards/Space';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {Board} from '../../boards/Board';
import {CardResource} from '../../../common/CardResource';
import {Size} from '../../../common/cards/render/Size';

export class TemperateRainforest extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TEMPERATE_RAINFOREST,
      tags: [Tag.ANIMAL, Tag.PLANT],
      cost: 28,
      requirements: {temperature: 0},

      behavior: {
        greenery: {},
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 2},
      },

      metadata: {
        cardNumber: 'x077',
        renderData: CardRenderer.builder((b) => {
          b.effect('Greenery tiles grant you an adjacency bonus of 1MC.', (eb) => {
            eb.greenery({withO2: false, size: Size.SMALL}).emptyTile('normal', {size: Size.SMALL}).startEffect.megacredits(1);
          }).br;
          b.greenery().animals(2).asterix();
        }),
        description: 'Requires 0°C or higher. Place a greenery tile and add 2 animals to ANOTHER card.'
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, player: IPlayer, space: Space) {
    if (cardOwner.id === player.id && space.tile) {
      cardOwner.stock.add(Resource.MEGACREDITS, player.game.board.getAdjacentSpaces(space).filter(Board.isGreenerySpace).length);
    }
  }
}
