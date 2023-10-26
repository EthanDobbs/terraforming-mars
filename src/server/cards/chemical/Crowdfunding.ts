import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class Crowdfunding extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CROWDFUNDING,
      tags: [Tag.EARTH],
      cost: 3,

      behavior: {
        production: {megacredits: {tag: Tag.EARTH, per: 2}},
      },

      metadata: {
        cardNumber: 'x220',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().earth(2, {played}));
        }),
        description: 'Increase your M€ production 1 step for every 2 Earth tags you have.',
      },
    });
  }
}
