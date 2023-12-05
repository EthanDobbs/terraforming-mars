import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class WirelessEnergyTransfer extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.WIRELESS_ENERGY_TRANSFER,
      tags: [Tag.POWER],
      cost: 12,
      requirements: {tag: Tag.SCIENCE, count: 3},

      behavior: {
        production: {megacredits: {tag: Tag.POWER}}
      },

      action: {
        spend: {megacredits: 3},
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'x194',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 M€ to increase your energy production 1 step.', (eb) => {
            eb.megacredits(3).startAction.production((pb) => pb.energy(1));
          }).br;
          b.production((pb) => pb.megacredits(1).slash().energy(1, {played}));
        }),
        description: 'Requires 3 science tags. Increase your M€ production 1 step for each power tag you have.',
      },
    });
  }
}
