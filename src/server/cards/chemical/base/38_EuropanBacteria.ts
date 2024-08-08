import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class EuropanBacteria extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.EUROPAN_BACTERIA,
      tags: [Tag.JOVIAN, Tag.MICROBE],
      cost: 20,
      requirements: {tag: Tag.JOVIAN, count: 1},
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 2},

      behavior: {
        tr: 1,
      },

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'xB38',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 microbe to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE);
          }).br;
          b.vpText('1 VP per 2 Microbes on this card.').br;
          b.tr(1);
        }),
        description: 'Requires 1 Jovian tag. Raise your TR one step.',
      },
    });
  }
}
