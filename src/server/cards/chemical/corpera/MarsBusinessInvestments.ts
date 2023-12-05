import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';

export class MarsBuinessInvestments extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MARS_BUSINESS_INVESTMENTS,
      cost: 6,
      requirements: {cities: 2, all},

      behavior: {
        production: {megacredits: -2},
      },

      action: {
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'x201',
        renderData: CardRenderer.builder((b) => {
          b.action('Increase your M€ production 1 step.', (eb) => {
            eb.empty().startAction.production((pb) => pb.megacredits(1));
          }).br;
          b.production((pb) => pb.minus().megacredits(2));
        }),
        description: 'Requires any 2 cities. Decrease your M€ production 2 steps.',
      },
    });
  }
}
