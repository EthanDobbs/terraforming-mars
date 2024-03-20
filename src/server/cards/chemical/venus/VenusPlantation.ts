import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';
import {SelectCard} from '../../../inputs/SelectCard';
import {ICard} from '../../ICard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IProjectCard} from '../../IProjectCard';

export class VenusPlantation extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_PLANTATION,
      type: CardType.AUTOMATED,
      tags: [Tag.PLANT, Tag.VENUS],
      cost: 15,

      requirements: {venus: 24},
      victoryPoints: 3,

      behavior:{
        drawCard: {tag: Tag.VENUS, count: 2}
      },

      metadata: {
        cardNumber: 'x308',
        renderData: CardRenderer.builder((b) => {
          b.microbes(1, {secondaryTag: Tag.VENUS}).or().animals(1, {secondaryTag: Tag.VENUS}).br;
        }),
        description: 'Requires Venus 24%. Draw 2 cards with Venus tags. Add 1 microbe or 1 animal to a Venus card.',
      },
    });
  }
  public getResCards(player: IPlayer): ICard[] {
    let resourceCards = player.getResourceCards(CardResource.ANIMAL);
    resourceCards = resourceCards.concat(player.getResourceCards(CardResource.MICROBE));
    return resourceCards.filter((card) => card.tags.includes(Tag.VENUS));
  }

  public override bespokePlay(player: IPlayer) {
    const cards = this.getResCards(player);

    if (cards.length > 1) {
      return new SelectCard(
        'Select card to add 1 resource',
        'Add resources',
        cards)
        .andThen(([card]) => {
          player.addResourceTo(card, {qty: 1, log: true});
          return undefined;
        });
    }

    if (cards.length === 1) {
      player.addResourceTo(cards[0], {qty: 1, log: true});
    }
    return undefined;
  }
}
