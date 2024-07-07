import {IActionCard} from '../../ICard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class AerialMassDrivers extends ActionCard implements IActionCard {
  constructor() {
    super({
      name: CardName.AERIAL_MASS_DRIVERS,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 15,
      victoryPoints: 1,

      resourceType: CardResource.FLOATER,

      action: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1, autoSelect: true},
      },

      metadata: {
        cardNumber: 'x331',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to any card', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER);
          }).br;
          b.effect('Floaters on this card mey be used as 4 M€ when paying for standard projects.', (eb) => {
            eb.plate('Standard projects').startEffect.resource(CardResource.FLOATER).equals().megacredits(4);
          }).br;
        }),
      },
    });
  }
}
