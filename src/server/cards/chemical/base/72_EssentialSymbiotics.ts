import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import { CardResource } from '../../../../common/CardResource';

export class EssentialSymbiotics extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ESSENTIAL_SYMBIOTICS,
      cost: 8,
      tags: [Tag.MICROBE],

      behavior: {
        production: {plants: 1},
      },

      metadata: {
        cardNumber: 'xB72',
        renderData: CardRenderer.builder((b) => {
          b.effect('When adding microbe resources to a card, you may instead gain plant resources.', (eb) => {
            eb.plus().resource(CardResource.MICROBE).startEffect.plus().plants(1);
          }).br;
          b.production((pb) => pb.plants(1));
        }),
        description: 'Increase your plant production 1 step.',
      },
    });
  }
  // effect to be implemented
}
