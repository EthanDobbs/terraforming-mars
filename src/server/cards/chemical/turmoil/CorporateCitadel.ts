import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {PartyName} from '../../../../common/turmoil/PartyName';

export class CorporateCitadel extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CORPORATE_CITADEL,
      cost: 11,
      tags: [Tag.SPACE],
      requirements: {party: PartyName.UNITY},
      victoryPoints: 1,

      behavior: {
        production: {megacredits: 4, energy: -1},
      },

      metadata: {
        cardNumber: 'x409',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(4);
          });
        }),
        description: 'Requires that Unity are in power or that you have 2 delegates there. Decrease your energy production 1 step and increase your M€ production 4 steps.',
      },
    });
  }
}
