import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class TitanTradeHub extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TITAN_TRADE_HUB,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 28,
      victoryPoints: {tag: Tag.JOVIAN},

      behavior: {
        production: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'x222',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(3);
          }).br;
          b.vpText('1 VP per Jovian tag you have.');
        }),
        description: 'Increase your M€ production 3 steps.',
      },
    });
  }
}
