import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class VenusFirstChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_FIRST_CHEMICAL,
      tags: [Tag.VENUS],

      behavior: {
        global: {venus: 2},
        drawCard: {count: 2, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'xP31',
        renderData: CardRenderer.builder((b) => {
          b.venus(2).cards(2, {secondaryTag: Tag.VENUS});
        }),
        description: 'Raise Venus 2 steps and draw 2 cards with Venus tags.',
      },
    });
  }
}
