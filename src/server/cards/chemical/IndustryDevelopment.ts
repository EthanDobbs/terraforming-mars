import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';

export class IndustryDevelopment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.INDUSTRY_DEVELOPMENT,
      cost: 8,
      tags: [Tag.BUILDING],
      requirements: {party: PartyName.MARS},

      behavior: {
        production: {steel: 1, energy: 1},
      },

      metadata: {
        cardNumber: 'x412',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.steel(1).energy(1);
          });
        }),
        description: 'Requires that Mars First are in power or that you have 2 delegates there. Raise your steel production 1 step and your energy production 1 step.',
      },
    });
  }
}
