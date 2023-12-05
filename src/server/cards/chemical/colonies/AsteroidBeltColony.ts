import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class AsteroidBeltColony extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ASTEROID_BELT_COLONY,
      tags: [Tag.SPACE],
      cost: 22,
      resourceType: CardResource.ASTEROID,

      behavior: {
        colonies: {buildColony: {}},
      },

      action: {
        spend: {megacredits: 2},
        addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1},
      },

      metadata: {
        cardNumber: 'x326',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to add an asteroid to ANY card.', (eb) => {
            eb.megacredits(2).startAction.asteroids(1).asterix();
          }).br;
          b.effect('Asteroids on this card may be used as 5 M€ when paying for cards with space tags.', (eb) => {
            eb.space({played}).startEffect.asteroids(1).equals().megacredits(5);
          }).br;
          b.colonies(1);
        }),
        description: 'Place a colony.',
      },
    });
  }
}
