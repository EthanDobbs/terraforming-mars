import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class LongTermEvolutionStudy extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LONG_TERM_EVOLUTION_STUDY,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      cost: 5,
      resourceType: CardResource.ANIMAL,

      behavior: {
        production: {megacredits: -1}
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 animal to draw a card',
            spend: {resourcesHere: 1},
            drawCard: 1,
          },
          {
            title: 'Add an animal to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x188',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.or().br;
          b.action('Remove 1 animal from this card to draw a card.', (eb) => {
            eb.animals(1).startAction.cards(1);
          }).br;
          b.production((pb) => pb.megacredits(-1));
        }),
        description: 'Decrease your M€ production 1 step.'
      },
    });
  }
}
