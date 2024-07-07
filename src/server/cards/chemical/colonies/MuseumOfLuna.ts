import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class MuseumOfLuna extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MUSEUM_OF_LUNA,
      tags: [Tag.EARTH],
      cost: 11,
      victoryPoints: 1,

      behavior: {
        drawCard: 1,
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'x359',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1));
          b.cards(1);
        }),
        description: 'Increase your M€ production 1 step and draw a card.',
      },
    });
  }
}
