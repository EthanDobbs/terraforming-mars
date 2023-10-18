import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class AirborneMicrobes extends ActionCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.AIRBORNE_MICROBES,
      type: CardType.ACTIVE,
      tags: [Tag.MICROBE, Tag.VENUS],
      cost: 7,
      resourceType: CardResource.MICROBE,
      requirements: {venus: 4},
      victoryPoints: {resourcesHere: {}, per: 3},

      behavior: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, tag: Tag.VENUS, count: 2},
      },

      action: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, tag: Tag.VENUS, count: 1},
      },

      metadata: {
        cardNumber: 'x265',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to any Venus card.', (eb) => {
            eb.empty().startAction.microbes(1, {secondaryTag: Tag.VENUS});
          }).br;
          b.vpText('1 VP per 3 microbes on this card.').br;
          b.microbes(2, {secondaryTag: Tag.VENUS});
        }),
        description: 'Requires Venus 4% or higher. Add 2 microbes to any Venus card.',
      },
    });
  }
}
