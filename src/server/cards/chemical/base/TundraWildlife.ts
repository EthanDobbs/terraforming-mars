import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';

export class TundraWildlife extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TUNDRA_WILDLIFE,
      tags: [Tag.ANIMAL],
      cost: 12,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}},
      requirements: {oxygen: 9},

      metadata: {
        cardNumber: 'x051',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.ANIMAL);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for each animal on this card.');
        }),
        description: {
          text: 'Requires 9% oxygen. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
}
