import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class DeepPolarExtraction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DEEP_POLAR_EXTRACTION,
      cost: 12,
      tags: [Tag.BUILDING],
      requirements: {temperature: -10},

      behavior: {
        production: {steel: 1, heat: 1},
        ocean: {},
      },

      metadata: {
        cardNumber: 'x105',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1).heat(1)).nbsp.oceans(1);
        }),
        description: 'Requires -10°C or warmer. Increase your steel production 1 step and your heat production 1 step. Place an ocean tile.',
      },
    });
  }
}
