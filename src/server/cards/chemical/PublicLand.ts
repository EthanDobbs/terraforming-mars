import {IProjectCard} from '../IProjectCard';
import {Space} from '../../boards/Space';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {Size} from '../../../common/cards/render/Size';

export class PublicLand extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PUBLIC_LAND,
      tags: [Tag.BUILDING],
      cost: 18,

      behavior: {
        production: {heat: 1}
      },

      metadata: {
        cardNumber: 'x074',
        renderData: CardRenderer.builder((b) => {
          b.effect('Whenever a tile is placed, gain 1 M€.', (eb) => {
            eb.emptyTile('normal', {size: Size.SMALL, all}).startEffect.megacredits(1);
          });
        }),
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, _player: IPlayer, space: Space) {
    if (space.tile) {
      cardOwner.stock.add(Resource.MEGACREDITS, 1);
    }
  }
}
