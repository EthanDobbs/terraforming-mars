import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class MilitarySpaceStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MILITARY_SPACE_STATION,
      tags: [Tag.SPACE],
      cost: 19,
      victoryPoints: -1,

      behavior: {
        production: {energy: -1, megacredits: 1, titanium: 1},
        stock: {titanium: 4},
        drawCard: 1,
      },

      metadata: {
        cardNumber: 'x364',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(1).br.plus().megacredits(1).titanium(1)).cards(1).titanium(4, {digit});
        }),
        description: 'Decrease your energy production 1 step. Increase your M€ production 1 step and your titatium production 1 step. Draw a card and gain 4 titanium.',
      },
    });
  }
}
