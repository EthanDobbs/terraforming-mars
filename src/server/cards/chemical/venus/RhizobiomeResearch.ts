import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {CardResource} from '../../../../common/CardResource';

export class RhizobiomeResearch extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RHIZOBIOME_RESEARCH,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 12,

      behavior: {
        production: {plants: {tag: Tag.MICROBE, per: 2}},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'x302',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).slash().tag(Tag.MICROBE, 2)).resource(CardResource.MICROBE).asterix();
        }),
        description: 'Increase your plant production 1 step for every 2 microbe tags you have, including this. Add 2 microbes to another card.',
      },
    });
  }
}
