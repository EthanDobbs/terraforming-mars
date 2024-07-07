import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class LunarResort extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LUNAR_RESORT,
      tags: [Tag.EARTH],
      cost: 10,

      behavior: {
        production: {megacredits: {tag: Tag.EARTH}},
      },

      metadata: {
        cardNumber: 'x360',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.EARTH));
        }),
        description: 'Increase your M€ production 1 step for each Earth tag you have, including this.',
      },
    });
  }
}
