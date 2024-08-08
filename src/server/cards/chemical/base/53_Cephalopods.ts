import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {ActionCard} from '../../ActionCard';

export class Cephalopods extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CEPHALOPODS,
      tags: [Tag.ANIMAL],
      cost: 11,

      action: {
        addResources: 1,
      },

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 1},
      requirements: {oceans: 6},

      metadata: {
        cardNumber: 'xB53',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.ANIMAL);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for every animal on this card.');
        }),
        description: {
          text: 'Requires 6 ocean tiles. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
}
