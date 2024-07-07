import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {PartyName} from '../../../../common/turmoil/PartyName';

export class MicrobialSupport extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MICROBIAL_SUPPORT,
      cost: 8,
      tags: [Tag.MICROBE],
      requirements: {party: PartyName.GREENS},

      behavior: {
        production: {megacredits: {tag: Tag.MICROBE}},
      },

      metadata: {
        cardNumber: 'x406',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.MICROBE));
        }),
        description: 'Requires that Greens are in power or that you have 2 delegates there. Increase your M€ production 1 step for each microbe tag you have, including this.',
      },
    });
  }
}
