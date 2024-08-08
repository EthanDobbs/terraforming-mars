import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class AlgaeBioreactorsChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ALGAE_BIOREACTORS_CHEMICAL,
      cost: 15,
      tags: [Tag.POWER, Tag.MICROBE],

      behavior: {
        production: {energy: 2},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xB147',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(2)).plants(2);
        }),
        description: 'Increase your energy production 2 steps and gain 2 plants.',
      },
    });
  }
}
