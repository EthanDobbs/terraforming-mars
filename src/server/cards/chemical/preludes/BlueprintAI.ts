import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {played} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class BlueprintAI extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.BLUEPRINT_AI,

      behavior: {
        production: {megacredits: 1},
        drawCard: {count: 2, tag: Tag.BUILDING}
      },

      cardDiscount: {tag: Tag.BUILDING, amount: 2},
      metadata: {
        cardNumber: 'xP11',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an building card, you pay 2 M€ less for it.', (eb) => {
            eb.building(1, {played}).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => pb.megacredits(1)).nbsp.cards(2, {secondaryTag: Tag.BUILDING});
        }),
        description: 'Increase your M€ production 1 step and draw 2 cards with building tags.'
      },
    });
  }
}
