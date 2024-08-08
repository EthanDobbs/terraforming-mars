import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {Resource} from '../../../../common/Resource';

export class JovianSuppliers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.JOVIAN_SUPPLIERS,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 18,
      victoryPoints: 2,

      metadata: {
        cardNumber: 'xCE25',
        renderData: CardRenderer.builder((b) => {
          b.effect('Whenever any player plays a Jovian tag, gain 2 M€.', (eb) => {
            eb.tag(Tag.JOVIAN, {all}).startEffect.megacredits(2);
          });
        }),
      },
    });
  }
  public onCardPlayedFromAnyPlayer(thisCardOwner: IPlayer, _playedCardOwner: IPlayer, card: IProjectCard) {
    if (card.tags.includes(Tag.JOVIAN)) {
      thisCardOwner.stock.add(Resource.MEGACREDITS, 2);
    }
    return undefined;
  }
}
