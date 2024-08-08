import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class SpecialAerosols extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SPECIAL_AEROSOLS,
      cost: 22,
      requirements: {oxygen: 4},
      behavior: {
        tr: 2,
        production: {plants: 2},
      },

      metadata: {
        cardNumber: 'xB19',
        renderData: CardRenderer.builder((b) => {
          b.tr(2);
          b.production((pb) => pb.plants(2));
        }),
        description: 'Raise your TR 2 steps and increase your plant production 2 steps.',
      },
    });
  }
}
