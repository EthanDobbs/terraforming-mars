import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { CardResource } from '../../../common/CardResource';
import { Tag } from '../../../common/cards/Tag';
import { Size } from '../../../common/cards/render/Size';
import { IPlayer } from '../../IPlayer';
import { ICard } from '../ICard';
import { SelectCard } from '../../inputs/SelectCard';

export class MirandaLabs extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MIRANDA_LABS,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 15,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x164',
        renderData: CardRenderer.builder((b) => {
          b.animals(2).asterix().nbsp.or(Size.SMALL).nbsp.asteroids(2).asterix();
        }),
        description: 'Add 2 animals or 2 asteroids to ANOTHER card.',
      },
    });
  }
  public getResCards(player: IPlayer): ICard[] {
    let resourceCards = player.getResourceCards(CardResource.ANIMAL);
    resourceCards = resourceCards.concat(player.getResourceCards(CardResource.ASTEROID));
    return resourceCards;
  }

  public override bespokePlay(player: IPlayer) {
    const cards = this.getResCards(player);

    if (cards.length > 1) {
      return new SelectCard(
        'Select card to add 2 resources',
        'Add resources',
        cards)
        .andThen(([card]) => {
          player.addResourceTo(card, {qty: 2, log: true});
          return undefined;
        });
    }

    if (cards.length === 1) {
      player.addResourceTo(cards[0], {qty: 2, log: true});
    }
    return undefined;
  }
}
