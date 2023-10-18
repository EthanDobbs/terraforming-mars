import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';
import {CardResource} from '../../../common/CardResource';

export class RhizobiomeResearch extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RHIZOBIOME_RESEARCH,
      tags: [Tag.MICROBE],
      cost: 11,

      behavior: {
        production: {plants: {tag: Tag.MICROBE, per: 2}},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'x302',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).slash().microbes(2, {played})).microbes(2).asterix();
        }),
        description: 'Raise your plant production 1 step for every 2 microbe tags you have, including this. Add 2 microbes to another card.',
      },
    });
  }
}
