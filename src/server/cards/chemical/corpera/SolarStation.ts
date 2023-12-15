import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import { ActionCard } from '../../ActionCard';
import { IProjectCard } from '../../IProjectCard';

export class SolarStation extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SOLAR_STATION,
      tags: [Tag.SCIENCE, Tag.SPACE],
      cost: 16,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: 2,

      action: {
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x363',
        renderData: CardRenderer.builder((b) => {
          b.action('Draw a card.', (eb) => {
            eb.empty().startAction.cards(1);
          });
        }),
        description: 'Requires 4 science tags.',
      },
    });
  }
}
