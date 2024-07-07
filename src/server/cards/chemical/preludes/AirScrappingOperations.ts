import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class AirScrappingOperations extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.AIR_SCRAPPING_OPERATIONS,
      tags: [Tag.VENUS],

      behavior: {
        global: {venus: 2},
        stock: {megacredits: 8},
      },

      metadata: {
        cardNumber: 'xP35',
        renderData: CardRenderer.builder((b) => {
          b.effect('The Air Scrapping standard project costs you 3 M€ less.', (eb) => {
            eb.venus(1).asterix().startEffect.megacredits(-3);
          }).br;
          b.venus(2).megacredits(8);
        }),
        description: 'Raise Venus 2 steps and gain 8 M€.',
      },
    });
  }
  // effect handled in the air scrapping standard project file
}
