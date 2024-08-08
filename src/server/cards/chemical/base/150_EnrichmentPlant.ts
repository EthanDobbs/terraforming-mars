import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class EnrichmentPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ENRICHMENT_PLANT,
      cost: 11,
      tags: [Tag.SCIENCE, Tag.POWER, Tag.BUILDING],

      behavior: {
        production: {megacredits: -1, energy: 2},
      },

      metadata: {
        cardNumber: 'xB150',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().megacredits(1).br;
            pb.plus().energy(2);
          });
        }),
        description: 'Decrease your M€ production 1 step and increase your energy production 2 steps.',
      },
    });
  }
}
