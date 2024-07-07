import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class AmmoniaHeavyAsteroids extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.AMMONIA_HEAVY_ASTEROIDS,
      tags: [Tag.SPACE],
      cost: 5,
      resourceType: CardResource.ASTEROID,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 asteroid to increase your heat production 2 steps.',
            spend: {resourcesHere: 1},
            production: {heat: 2},
          },
          {
            title: 'Spend 1 titanium to add 1 asteroid to ANY card',
            spend: {titanium: 1},
            addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1},
          }],
        },
      },

      metadata: {
        cardNumber: 'x034',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 titanium to add 1 asteroid to ANY card.', (eb) => {
            eb.titanium(1).startAction.resource(CardResource.ASTEROID).asterix();
          }).br;
          b.or().br;
          b.action('Remove 1 asteroid from this card to increase your heat production 2 steps.', (eb) => {
            eb.resource(CardResource.ASTEROID).startAction.production((pb) => pb.heat(2));
          }).br;
        }),
      },
    });
  }
}
