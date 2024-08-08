import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';

export class SaturnGasMine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SATURN_GAS_MINE,
      cost: 26,
      tags: [Tag.JOVIAN, Tag.POWER, Tag.SPACE],
      victoryPoints: 2,

      behavior: {
        production: {titanium: 1, energy: 1},
      },

      metadata: {
        cardNumber: 'xB109',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1).energy(1));
        }),
        description: 'Increase your titanium production 1 step and your energy production 1 step.',
      },
    });
  }
}
