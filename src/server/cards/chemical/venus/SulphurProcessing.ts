import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';

export class SulphurProcessing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SULPHUR_PROCESSING,
      tags: [Tag.BUILDING],
      cost: 10,

      behavior: {
        production: {megacredits: 2},
        stock: {megacredits: {tag: Tag.VENUS, all: true}},
      },

      metadata: {
        cardNumber: 'x293',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).nbsp.megacredits(1).slash().tag(Tag.VENUS, {all}).br;
        }),
        description: 'Increase your M€ production 2 steps and gain 1 M€ for every Venus tag in play.',
      },
    });
  }
}
