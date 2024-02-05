import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class ChemicalPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CHEMICAL_PLANT,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 11,

      behavior: {
        production: {energy: -1, megacredits: 3},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x213',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          });
          b.cards(1);
        }),
        description: 'Decrease your energy production 1 step, increase your M€ production 3 steps, and draw a card.',
      },
    });
  }
}
