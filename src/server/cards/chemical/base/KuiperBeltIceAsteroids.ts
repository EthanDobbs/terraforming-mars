import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class KuiperBeltIceAsteroids extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KUIPER_BELT_ICE_ASTEROIDS,
      tags: [Tag.SPACE],
      cost: 18,
      resourceType: CardResource.ASTEROID,
      victoryPoints: 1,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 asteroids to place an ocean tile',
            spend: {resourcesHere: 2},
            ocean: {},
          },
          {
            title: 'Add 1 asteroid to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x032',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 asteroid to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.ASTEROID);
          }).br;
          b.or().br;
          b.action('Remove 2 asteroids from this card to place an ocean tile.', (eb) => {
            eb.resource(CardResource.ASTEROID).startAction.oceans(1);
          }).br;
        }),
      },
    });
  }
}
