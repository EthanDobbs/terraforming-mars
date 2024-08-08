import {IProjectCard} from '../../IProjectCard';
import {ActionCard} from '../../ActionCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {CardResource} from '../../../../common/CardResource';

export class MicrobeCultivationFacility extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MICROBE_CULTIVATION_FACILITY,
      tags: [Tag.MICROBE, Tag.BUILDING],
      cost: 18,
      requirements: {tag: Tag.MICROBE, count: 2},

      behavior: {
        production: {plants: 1},
      },

      action: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'xB73',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 microbes to ANOTHER card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE, 2).asterix();
          }).br;
          b.production((pb) => pb.plants(1));
        }),
        description: 'Requires 2 microbe tags. Increase your plant production 1 step.',
      },
    });
  }
}
