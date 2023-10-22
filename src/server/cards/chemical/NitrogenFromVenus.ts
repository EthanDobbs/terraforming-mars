import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class NitrogenFromVenus extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.NITROGEN_FROM_VENUS,
      tags: [Tag.VENUS, Tag.SPACE],
      cost: 18,
      victoryPoints: 1,

      behavior: {
        tr: 1,
        addResourcesToAnyCard: [{type: CardResource.MICROBE, count: 2, autoSelect: true}, {type: CardResource.FLOATER, count: 2, autoSelect: true}]
      },

      metadata: {
        cardNumber: 'x247',
        renderData: CardRenderer.builder((b) => {
          b.tr(1).br.microbes(2).asterix().floaters(2).asterix();
        }),
        description: 'Raise your TR 1 step, add 2 microbes to ANOTHER card, and 2 floaters to ANOTHER card.',
      },
    });
  }
}
