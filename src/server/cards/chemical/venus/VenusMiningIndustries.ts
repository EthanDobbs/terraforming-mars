import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class VenusMiningIndustries extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VENUS_MINING_INDUSTIRES,
      tags: [Tag.VENUS],
      cost: 32,
      requirements: {venus: 8},
      victoryPoints: {tag: Tag.VENUS, per: 2},

      behavior: {
        production: {steel: 1, titanium: 2},
      },

      metadata: {
        cardNumber: 'x279',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.steel(1).br;
            pb.titanium(2);
          }).br;
          b.vpText('1 VP for every 2 Venus tags you have.').br;
        }),
        description: 'Requires Venus 8%. Increase your steel production 1 step and your titanium production 2 steps.',
      },
    });
  }
}
