import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class CentaurLandings extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CENTAUR_LANDINGS,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 9,

      action: {
        spend: {titanium: 1},
        addResources: 1,
      },

      resourceType: CardResource.ASTEROID,
      victoryPoints: {resourcesHere: {}},
      requirements: {tag: Tag.JOVIAN, count: 2},

      metadata: {
        cardNumber: 'x182',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 titanium to add an asteroid to this card.', (eb) => {
            eb.titanium(1).startAction.asteroids(1);
          }).br;
          b.vpText('1 VP for every asteroid on this card.');
        }),
        description: 'Requires 2 Jovian tags',
      },
    });
  }
}
