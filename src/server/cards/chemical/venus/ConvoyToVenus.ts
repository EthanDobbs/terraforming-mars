import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class ConvoyToVenus extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CONVOY_TO_VENUS,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 23,
      victoryPoints: 1,

      behavior: {
        global: {venus: 1},
        drawCard: 1,
        addResourcesToAnyCard: {
          tag: Tag.VENUS,
          count: 2,
          autoSelect: true,
          mustHaveCard: false,
        },
      },

      metadata: {
        cardNumber: 'x244',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).wild(2, {secondaryTag: Tag.VENUS}).cards(1);
        }),
        description: 'Raise Venus 1 step, add 2 of any resource to a Venus card, and draw a card.',
      },
    });
  }
}
