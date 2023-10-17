import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import { Tag } from '../../../common/cards/Tag';

export class CollaborationProject extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.COLLABORATION_PROJECT,
      tags: [Tag.EARTH],
      cost: 6,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}, {tag: Tag.JOVIAN}],

      metadata: {
        cardNumber: 'x252',
        renderData: CardRenderer.builder((b) => {
          b.text('next card', Size.SMALL, true).colon().megacredits(-12);
        }),
        description: 'Requires that you have an Earth tag, a Venus tag, and a Jovian tag. The next card you play this generation costs 12 M€ less.',
      },
    });
  }

  public override getCardDiscount(player: IPlayer) {
    if (player.lastCardPlayed === this.name) {
      return 12;
    }
    return 0;
  }
}
