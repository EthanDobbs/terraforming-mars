import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class SprawlingCity extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPRAWLING_CITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 25,
      resourceType: CardResource.BUILDING_RESOURCE,
      behavior: {
        city: {}
      },

      action: {
        production: {energy: -1, megacredits: 1},
        addResources: 1,
      },

      victoryPoints: {resourcesHere: {}, per: 1},

      metadata: {
        cardNumber: 'x083',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 energy production to raise your MC production 1 step and add a building resource to this card.', (eb) => {
            eb.production((pb) => pb.energy(1)).startAction.production((pb) => pb.megacredits(1)).buildingResource(1);
          }).br;
          b.city().br;
          b.vpText('1VP for each building resource on this card.');
        }),
        description: 'Place a city tile.',
      },
    });
  }
}
