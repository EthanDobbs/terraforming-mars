import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Resource} from '../../../../common/Resource';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';

export class OlympusArchives extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.OLYMPUS_ARCHIVES,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 20,
      requirements: {tag: Tag.SCIENCE, count: 2},
      victoryPoints: 1,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'xCE26',
        renderData: CardRenderer.builder((b) => {
          b.effect('Whenever any player plays an event card, gain 2 M€.', (eb) => {
            eb.tag(Tag.EVENT, {all}).startEffect.megacredits(2);
          }).br;
          b.cards(2);
        }),
        description: 'Requires 2 science tags. Draw 2 cards.',
      },
    });
  }

  public onCardPlayedFromAnyPlayer(thisCardOwner: IPlayer, _playedCardOwner: IPlayer, card: IProjectCard) {
    if (card.type === CardType.EVENT) {
      thisCardOwner.stock.add(Resource.MEGACREDITS, 2, {log: true, from: this});
    }
    return undefined;
  }
}
