import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {CardResource} from '../../../../common/CardResource';
import {Tag} from '../../../../common/cards/Tag';

export class DeepJupiterProbe extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 11,
      name: CardName.DEEP_JUPITER_PROBE,
      type: CardType.EVENT,
      tags: [Tag.JOVIAN],
      victoryPoints: 1,

      behavior: {
        drawCard: 1,
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.JOVIAN, count: 2},
      },

      metadata: {
        cardNumber: 'x321',
        renderData: CardRenderer.builder((b) => {
          b.resource(CardResource.FLOATER, {amount: 2, secondaryTag: Tag.JOVIAN}).nbsp.cards(1);
        }),
        description: 'Add 2 floaters to any Jovian card and draw a card.',
      },
    });
  }
}
