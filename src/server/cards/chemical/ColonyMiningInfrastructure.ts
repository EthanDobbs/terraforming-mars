import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ColonyMiningInfrastructure extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COLONY_MINING_INFRASTRUCTURE,
      cost: 5,
      requirements: {colonies: 2},

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'x366',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1));
        }),
        description: 'Requires you own 2 colonies. Increase your titanium production 1 step.',
      },
    });
  }
}
