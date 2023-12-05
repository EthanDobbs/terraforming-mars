import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';

export class AsteroidStudy extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ASTEROID_STUDY,
      tags: [Tag.SPACE],
      cost: 12,
      resourceType: CardResource.ASTEROID,
      behavior: {
        addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 2}
      },

      action: {
        spend: {energy: 1},
        addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1}
      },

      victoryPoints: {resourcesHere: {}, per: 2},

      metadata: {
        cardNumber: 'x029',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 energy to add 1 asteroid to ANY card.', (eb) => {
            eb.energy(1).startAction.asteroids(1).asterix();
          }).br;
          b.asteroids(2).asterix().br;
          b.vpText('1VP for each 2 asteroids on this card.');
        }),
        description: 'Add 2 asteroids to ANY card.',
      },
    });
  }
}
