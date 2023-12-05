import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';

export class GeneticEngineeringLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.GENETIC_ENGINEERING_LAB,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 15,
      victoryPoints: 1,

      requirements: {tag: Tag.SCIENCE, count: 2},
      cardDiscount: [{tag: Tag.PLANT, amount: 3}, {tag: Tag.ANIMAL, amount: 3}, {tag: Tag.MICROBE, amount: 3}],

      metadata: {
        cardNumber: 'x072',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your plant tags, animal tags, and microbe tags cost 3 M€ less.', (eb) => {
            eb.plants(1, {played}).slash().microbes(1, {played}).slash().animals(1, {played}).startEffect.megacredits(-3);
          });
        }),
        description: 'Requires 2 science tags.'
      },
    });
  }
}
