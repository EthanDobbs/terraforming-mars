import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {played} from '../../Options';

export class ConstructionCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CONSTRUCTION_CENTER,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 26,
      cardDiscount: {tag: Tag.BUILDING, amount: 2},

      behavior: {
        production: {energy: -1, megacredits: 3},
        city: {},
      },

      metadata: {
        cardNumber: 'x199',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a buiding tag, you pay 2 M€ less for it.', (eb) => {
            eb.building(1, {played}).startEffect.megacredits(-2);
          }).br;
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          })
          b.city();
        }),
        description: 'Decrease your energy production 1 step and increase your M€ production 3 steps. Place a city tile.',
      },
    });
  }
}
