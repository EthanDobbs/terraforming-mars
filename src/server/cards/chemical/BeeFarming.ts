import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {played} from '../Options';

export class BeeFarming extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BEE_FARMING,
      cost: 15,
      tags: [Tag.MICROBE],
      requirements: {oxygen: 9},
      victoryPoints: 1,

      behavior: {
        production: {megacredits: 1, plants: {tag: Tag.PLANT}}
      },

      metadata: {
        cardNumber: 'x136',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1).br;
            pb.plants(1).slash().plants(1, {played});
          })
        }),
        description: 'Requires 9% oxygen. Increase your M€ production 1 step and your plant production 1 step for each plant tag you have.',
      },
    });
  }
}
