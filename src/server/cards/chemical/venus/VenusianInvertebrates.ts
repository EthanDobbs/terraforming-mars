import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class VenusianInvertebrates extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUSIAN_INVERTEBRATES,
      type: CardType.ACTIVE,
      tags: [Tag.ANIMAL, Tag.VENUS],
      cost: 7,
      resourceType: CardResource.ANIMAL,
      requirements: {venus: 12},
      victoryPoints: {resourcesHere: {}, per: 2},

      behavior: {
        addResources: 1,
      },

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'x270',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.vpText('1 VP per 2 animals on this card.').br;
          b.animals(1);
        }),
        description: 'Requires 12% Venus or higher. Add an animal to this card.',
      },
    });
  }
}
