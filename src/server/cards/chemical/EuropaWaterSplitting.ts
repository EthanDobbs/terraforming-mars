import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class EuropaWaterSplitting extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.EUROPA_WATER_SPLITTING,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 17,
      victoryPoints: 1,

      action: {
        spend: {energy: 3},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: 'x064',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 energy to raise the oxygen 1 step', (eb) => {
            eb.energy(3).startAction.oxygen(1);
          }).br;
        }),
      },
    });
  }
}
