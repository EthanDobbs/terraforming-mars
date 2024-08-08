import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class CyanobacteriaPods extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.CYANOBACTERIA_PODS,
      tags: [Tag.MICROBE],

      behavior: {
        production: {plants: 2},
      },

      cardDiscount: {tag: Tag.MICROBE, amount: 2},
      metadata: {
        cardNumber: 'xP18',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a microbe card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.MICROBE).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.plants(2));
        }),
        description: 'Increase your plant production 2 steps.',
      },
    });
  }
}
