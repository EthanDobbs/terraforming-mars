import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IPlayer} from '../../../IPlayer';

export class BioengineeringStudies extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.BIOENGINEERING_STUDIES,
      type: CardType.ACTIVE,
      tags: [Tag.ANIMAL, Tag.VENUS, Tag.EARTH],
      cost: 5,
      resourceType: CardResource.ANIMAL,

      metadata: {
        cardNumber: 'x271',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every Venus tag you play, add an animal resource to this card.', (eb) => {
            eb.tag(Tag.VENUS).startEffect.resource(CardResource.ANIMAL);
          }).br;
          b.effect('Animals on this card may be used as 3 M€ when paying for cards with animal tags.', (eb) => {
            eb.tag(Tag.ANIMAL).startEffect.resource(CardResource.ANIMAL).equals().megacredits(3);
          }).br;
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.VENUS);
    player.addResourceTo(this, {qty, log: true});
  }
  // heed my warning, do not try to impement an effect like this

  // effect functionality handled elsewhere
}
