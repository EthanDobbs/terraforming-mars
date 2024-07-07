import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IProjectCard} from '../../IProjectCard';

export class Superpolymers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SUPERPOLYMERS,
      tags: [Tag.SCIENCE],
      cost: 17,

      behavior: {
        steelValue: 1,
        production: {steel: 1},
      },

      metadata: {
        cardNumber: 'x363',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your steel resources are worth 1 M€ extra.', (eb) => {
            eb.empty().startEffect.plus().steel(1);
          }).br;
          b.production((pb) => pb.steel(1));
        }),
        description: 'Increase your steel production 1 step.',
      },
    });
  }
}
