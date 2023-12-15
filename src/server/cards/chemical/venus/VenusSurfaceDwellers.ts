import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class VenusSurfaceDwellers extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_SURFACE_DWELLERS,
      type: CardType.ACTIVE,
      tags: [Tag.ANIMAL, Tag.VENUS],
      cost: 25,
      resourceType: CardResource.ANIMAL,
      requirements: {venus: 24},
      victoryPoints: {resourcesHere: {}, each: 2},

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'x269',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.vpText('2 VP per animal on this card.').br;
          b.tr(1);
        }),
        description: 'Requires 24% Venus or higher.',
      },
    });
  }
}
