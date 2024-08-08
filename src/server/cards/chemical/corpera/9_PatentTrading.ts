import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {DiscardCards} from '../../../deferredActions/DiscardCards';
import {DrawCards} from '../../../deferredActions/DrawCards';
import {Tag} from '../../../../common/cards/Tag';

export class PatentTrading extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PATENT_TRADING,
      tags: [Tag.EARTH],
      cost: 3,

      metadata: {
        cardNumber: 'xCE9',
        description: 'Discard a card, then draw a card for every 2 Earth tags you have, including this.',
        renderData: CardRenderer.builder((b) => {
          b.minus().cards(1).nbsp.plus().cards(1).slash().tag(Tag.EARTH, 2);
        }),
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.cardsInHand.length > 1; // this card and at least one other
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new DiscardCards(player)).andThen(() =>
      player.game.defer(DrawCards.keepAll(player, Math.floor((player.tags.count(Tag.EARTH) + 1)/ 2))),
    );
    return undefined;
  }
}
