import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';

export class SisterPlanetResearch extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.SISTER_PLANET_RESEARCH,

      behavior: {
        production: {megacredits: 1},
        drawCard: {count: 3, tag: Tag.VENUS},
      },

      cardDiscount: {tag: Tag.VENUS, amount: 2},
      metadata: {
        cardNumber: 'xP38',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a Venus card, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.VENUS).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.megacredits(1)).nbsp.cards(3, {secondaryTag: Tag.VENUS});
        }),
        description: 'Increase your M€ production 1 step and draw 3 cards with Venus tags.',
      },
    });
  }
}
