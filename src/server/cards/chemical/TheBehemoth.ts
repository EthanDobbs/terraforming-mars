import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class TheBehemoth extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.THE_BEHEMOTH,
      tags: [Tag.VENUS],
      cost: 20,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: {tag: Tag.VENUS, per: 2},

      behavior: {
        production: {megacredits: 2},
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 3, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'x278',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).floaters(3, {secondaryTag: Tag.VENUS}).br;
          b.vpText('1 VP for every 2 Venus tags you have.').br;
        }),
        description: 'Requires that you have 4 science tags. Raise your MC production 2 steps and add 3 floaters to any Venus card.',
      },
    });
  }
}
