import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class GalileanGovernor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GALILEAN_GOVERNOR,
      tags: [Tag.JOVIAN],
      cost: 4,

      behavior: {
        production: {megacredits: 2},
      },

      requirements: {tag: Tag.JOVIAN, count: 2},
      metadata: {
        cardNumber: 'x208',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(2);
          });
        }),
        description: 'Requires 2 Jovian tags. Increase M€ production 2 steps.',
      },
    });
  }
}
