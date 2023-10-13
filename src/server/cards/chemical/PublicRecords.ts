import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class PublicRecords extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PUBLIC_RECORDS,
      cost: 0,

      metadata: {
        cardNumber: 'x173',
        description: 'For your next action this generation, act as if you had an additional wild tag in play.',
        renderData: CardRenderer.builder((b) => {
          b.wild(1, {played}).asterix();
        }),
      },
    });
  }
  //Behavior handled in player/Tags.ts
}
