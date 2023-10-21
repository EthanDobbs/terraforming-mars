import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class EarthEmbassyChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EARTH_EMBASSY_CHEMICAL,
      tags: [Tag.EARTH, Tag.BUILDING],
      cost: 14,
      victoryPoints: 1,

      behavior: {
        tr: 1,
      },

      metadata: {
        cardNumber: 'x375',
        renderData: CardRenderer.builder((b) => {
          b.tr(1);
        }),
        description: 'Raise your TR 1 step.',
      },
    });
  }
}
