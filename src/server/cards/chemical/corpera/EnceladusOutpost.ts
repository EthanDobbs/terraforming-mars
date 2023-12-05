import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class EnceladusOutpost extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ENCELADUS_OUTPOST,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 10,
      victoryPoints: 1,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Add a microbe to ANY card',
            addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1}
          },
          {
            title: 'Spend 1 titanium to add 1 asteroid to ANY card',
            spend: {titanium: 1},
            addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1}
          }],
        },
      },

      metadata: {
        cardNumber: 'x184',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 microbe to ANY card.', (eb) => {
            eb.empty().startAction.microbes(1).asterix();
          }).br;
          b.or().br;
          b.action('Spend 1 titanium to add 1 asteroid to ANY card.', (eb) => {
            eb.titanium(1).startAction.asteroids(1).asterix();
          }).br;
        }),
      },
    });
  }
}
