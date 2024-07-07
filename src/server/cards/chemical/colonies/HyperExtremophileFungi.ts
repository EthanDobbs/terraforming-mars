import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {CardResource} from '../../../../common/CardResource';
import {all} from '../../Options';

export class HyperExtremophileFungi extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HYPER_EXTREMOPHILE_FUNGI,
      cost: 12,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      requirements: {tag: Tag.SCIENCE, count: 6},
      victoryPoints: 1,

      behavior: {
        stock: {plants: {colonies: {colonies: {}}, all: true, each: 2}},
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
      },

      metadata: {
        cardNumber: 'x382',
        renderData: CardRenderer.builder((b) => {
          b.plants(2).slash().colonies(1, {all}).nbsp.resource(CardResource.MICROBE, 2).asterix();
        }),
        description: 'Requires 6 science tags. Gain 2 plants for each colony in play and add 2 microbes to ANOTHER card.',
      },
    });
  }
}
