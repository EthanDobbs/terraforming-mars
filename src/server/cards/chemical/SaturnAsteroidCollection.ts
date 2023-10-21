import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {digit} from '../Options';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
import {SelectCard} from '../../inputs/SelectCard';

export class SaturnAsteroidCollection extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SATURN_ASTEROID_COLLECTION,
      cost: 13,
      tags: [Tag.JOVIAN, Tag.SPACE],
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x379',
        renderData: CardRenderer.builder((b) => {
          b.asteroids(2).asterix().nbsp.or().nbsp.floaters(3, {digit});
        }),
        description: 'Add 2 asteroids or 3 floaters to ANOTHER card.',
      },
    });
  }
  public getResCards(player: IPlayer): ICard[] {
    let resourceCards = player.getResourceCards(CardResource.ASTEROID);
    resourceCards = resourceCards.concat(player.getResourceCards(CardResource.FLOATER));
    return resourceCards;
  }
  public amount(card: ICard): number {
    return card.resourceType === CardResource.FLOATER ? 3 : 2
  }

  public override bespokePlay(player: IPlayer) {
    const cards = this.getResCards(player);

    if (cards.length > 1) {
      return new SelectCard(
        'Select card to add resources',
        'Add resources',
        cards)
        .andThen(([card]) => {
          player.addResourceTo(card, {qty: this.amount(card), log: true});
          return undefined;
        });
    }

    if (cards.length === 1) {
      player.addResourceTo(cards[0], {qty: this.amount(cards[0]), log: true});
    }
    return undefined;
  }
}
