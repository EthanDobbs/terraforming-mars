import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class TerrestrialPlanetMission extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.TERRESTRIAL_PLANET_MISSION,

      behavior: {
        global: {venus: 1},
        drawCard: {count: 1, tag: Tag.VENUS},
        ocean: {},
      },

      metadata: {
        cardNumber: 'xP33',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).oceans(1).cards(1, {secondaryTag: Tag.VENUS});
        }),
        description: 'Raise Venus 1 step, place an ocean tile, and draw a card with a Venus tag.',
      },
    });
  }
}
