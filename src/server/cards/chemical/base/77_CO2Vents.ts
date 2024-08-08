import {IProjectCard} from '../../IProjectCard';
import {Space} from '../../../boards/Space';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Resource} from '../../../../common/Resource';
import {CardRenderer} from '../../render/CardRenderer';
import {SpaceType} from '../../../../common/boards/SpaceType';
import {Size} from '../../../../common/cards/render/Size';

export class CO2Vents extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CO2_VENTS,
      tags: [Tag.BUILDING],
      cost: 10,

      behavior: {
        production: {heat: 1},
      },

      metadata: {
        cardNumber: 'xB77',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you place a tile ON MARS, gain 2 heat.', (eb) => {
            eb.emptyTile('normal', {size: Size.SMALL}).asterix().startEffect.heat(2);
          }).br;
          b.production((pb) => pb.heat(1));
        }),
        description: 'Increase your heat production 1 step.',
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, player: IPlayer, space: Space) {
    if (cardOwner.id === player.id && space.tile && space.spaceType !== SpaceType.COLONY) {
      cardOwner.stock.add(Resource.HEAT, 2);
    }
  }
}
