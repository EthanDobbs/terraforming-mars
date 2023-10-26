import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {digit} from '../Options';

export class NaturalGasExtraction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.NATURAL_GAS_EXTRACTION,
      cost: 13,
      tags: [Tag.BUILDING],
      requirements: {temperature: -20},

      behavior: {
        production: {heat: 4},
      },

      metadata: {
        cardNumber: 'x160',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(4, {digit}));
        }),
        description: 'Requires -20°C or warmer. Increase your heat production 4 steps.',
      },
    });
  }
}
