import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class FishFarmingLake extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FISH_FARMING_LAKE,
      tags: [Tag.ANIMAL, Tag.BUILDING],
      cost: 16,

      behavior: {
        ocean: {}
      },

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}},
      requirements: {temperature: 4},

      metadata: {
        cardNumber: 'x053',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.oceans(1).br;
          b.vpText('1 VP for each animal on this card.');
        }),
        description: {
          text: 'Requires 4°C or warmer. Place an ocean tile.',
          align: 'left',
        },
      },
    });
  }
}
