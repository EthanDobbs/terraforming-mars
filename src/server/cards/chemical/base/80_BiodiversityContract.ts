import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardRenderer} from '../../render/CardRenderer';
import {ICard} from '../../ICard';
import {CardResource} from '../../../../common/CardResource';
import {Resource} from '../../../../common/Resource';

export class BiodiversityContract extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.BIODIVERSITY_CONTRACT,
      tags: [Tag.EARTH],
      cost: 7,

      metadata: {
        cardNumber: 'xB80',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you gain a microbe or animal to ANY CARD, also gain 1 M€.', (eb) => {
            eb.resource(CardResource.MICROBE).asterix().slash().resource(CardResource.ANIMAL).asterix().startEffect.megacredits(1);
          }).br;
        }),
      },
    });
  }

  public onResourceAdded(player: IPlayer, card: ICard, count: number) {
    if (card.resourceType === CardResource.MICROBE || card.resourceType === CardResource.ANIMAL) {
      player.stock.add(Resource.MEGACREDITS, count, {log: true});
    }
  }
}
