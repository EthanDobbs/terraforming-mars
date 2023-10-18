import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';
import {Resource} from '../../../common/Resource';

export class Monsoons extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MONSOONS,
      cost: 12,
      requirements: {oceans: 8},
      victoryPoints: 1,

      behavior: {
        decreaseAnyProduction: {type: Resource.HEAT, count: 2},
        production: {plants: 4},
      },

      metadata: {
        cardNumber: 'x134',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().heat(2, {all}).br;
            pb.plus().plants(4, {digit});
          });
        }),
        description: 'Requires 8 or more oceans. Lower any player\'s heat production 2 steps and raise your plant production 4 steps.',
      },
    });
  }
}
