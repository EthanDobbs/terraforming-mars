import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IProjectCard} from '../../IProjectCard';

export class HydrogenFromSaturn extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.HYDROGEN_FROM_SATURN,
      type: CardType.EVENT,
      tags: [Tag.SPACE],
      cost: 22,
      victoryPoints: 1,

      behavior: {
        ocean: {},
        addResourcesToAnyCard: {count: {tag: Tag.JOVIAN}, type: CardResource.MICROBE},
      },

      metadata: {
        cardNumber: 'x020',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).nbsp.nbsp;
          b.resource(CardResource.MICROBE).asterix().slash().tag(Tag.JOVIAN);
        }),
        description: 'Place an ocean tile. Add 1 microbe to ANY card for each Jovian tag you have.',
      },
    });
  }
}
