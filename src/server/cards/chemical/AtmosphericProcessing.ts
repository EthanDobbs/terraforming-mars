import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class AtmosphericProcessing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ATMOSPHERIC_PROCESSING,
      cost: 9,
      tags: [Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {megacredits: 1, energy: 1},
      },

      metadata: {
        cardNumber: 'x141',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).energy(1));
        }),
        description: 'Raise your MC production 1 step and your energy production 1 step.',
      },
    });
  }
}
