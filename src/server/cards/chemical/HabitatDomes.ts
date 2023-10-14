import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HabitatDomes extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.HABITAT_DOMES,
      tags: [Tag.ANIMAL, Tag.BUILDING],
      cost: 10,

      action: {
        spend: {megacredits: 2},
        addResourcesToAnyCard: {type: CardResource.ANIMAL, count: 1}
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},

      metadata: {
        cardNumber: 'x061',
        renderData: CardRenderer.builder((b) => {
          b.action('spend 2MC to add 1 animal to ANY card.', (eb) => {
            eb.megacredits(2).startAction.animals(1).asterix();
          }).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
      },
    });
  }
}
