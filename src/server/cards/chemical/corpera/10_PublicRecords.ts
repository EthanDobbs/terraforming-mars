import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class PublicRecords extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PUBLIC_RECORDS,
      cost: 0,

      metadata: {
        cardNumber: 'xCE10',
        description: 'For your next action this generation, act as if you had an additional wild tag in play.',
        renderData: CardRenderer.builder((b) => {
          b.tag(Tag.WILD).asterix();
        }),
      },
    });
  }
  // Behavior handled in player/Tags.ts
}
