import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class StellarCruisers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.STELLAR_CRUISERS,
      tags: [Tag.SPACE],
      cost: 10,
      victoryPoints: 1,
      requirements: {uniqueTags: {}, count: 9},

      behavior: {
        production: {megacredits: {tag: Tag.EARTH}},
      },

      metadata: {
        cardNumber: 'x294',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1).slash().earth(1, {played});
          });
        }),
        description: 'Requires that you have 9 unique tags in play. Increase your M€ production 1 step for each Earth tag you have.',
      },
    });
  }
}
