import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class Supercapacitors extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SUPERCAPACITORS,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 4,

      behavior: {
        production: {megacredits: 1},
        optionalEnergyConversion: true,
      },

      metadata: {
        cardNumber: 'X46',
        renderData: CardRenderer.builder((b) => {
          b.text('EFFECT: CONVERTING ENERGY TO HEAT DURING PRODUCTION IS OPTIONAL FOR EACH ENERGY RESOURCE.');
          b.br;
          b.production((pb) => pb.megacredits(1));
        }),
        description: 'Increase M€ production 1 step.',
      },
    });
  }
}
