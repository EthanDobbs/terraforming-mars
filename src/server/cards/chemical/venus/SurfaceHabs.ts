import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class SurfaceHabs extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SURFACE_HABS,
      tags: [Tag.VENUS],
      cost: 12,
      requirements: {venus: 12},
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 1},
        drawCard: {count: 2, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'x299',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3)).nbsp;
          b.wild(1, {secondaryTag: Tag.VENUS});
        }),
        description: 'Requires Venus 12%. Increase your M€ production 1 step and draw 2 cards with Venus tags.',
      },
    });
  }
}
