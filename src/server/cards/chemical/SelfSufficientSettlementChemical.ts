import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SelfSufficientSettlementChemical extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.SELF_SUFFICIENT_SETTLEMENT_CHEMICAL,
      tags: [Tag.BUILDING, Tag.CITY],

      behavior: {
        production: {megacredits: 2},
        stock: {megacredits: 3},
        city: {},
      },
      startingMegacredits: 3,

      metadata: {
        cardNumber: 'xR43',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).megacredits(3).city();
        }),
        description: 'Increase your M€ production 2 steps and gain 3 M€. Place a city tile.',
      },
    });
  }
}
