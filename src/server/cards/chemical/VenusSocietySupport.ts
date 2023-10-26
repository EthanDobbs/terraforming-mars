import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';
import {played} from '../Options';

export class VenusSocietySupport extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUS_SOCIETY_SUPPORT,
      cost: 8,
      tags: [Tag.VENUS],
      requirements: {party: PartyName.UNITY},

      behavior: {
        production: {megacredits: {tag: Tag.VENUS}},
      },

      metadata: {
        cardNumber: 'x407',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().venus(1, {played}));
        }),
        description: 'Requires that Unity are in power or that you have 2 delegates there. Increase your M€ production 1 step for each Venus tag you have, including this.',
      },
    });
  }
}
