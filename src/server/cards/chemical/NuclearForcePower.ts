import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class NuclearForcePower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.NUCLEAR_FORCE_POWER,
      tags: [Tag.SCIENCE, Tag.POWER, Tag.BUILDING],
      cost: 14,
      requirements: {tag: Tag.SCIENCE, count: 5},
      victoryPoints: 2,

      behavior: {
        production: {energy: 4},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x235',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(4, {digit})).cards(1);
        }),
        description: 'Requires 5 science tags. Increase your energy production 4 steps and draw a card.',
      },
    });
  }
}
