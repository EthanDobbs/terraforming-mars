import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardResource} from '../../../../common/CardResource';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class MethaneExports extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 16,
      tags: [Tag.JOVIAN],
      name: CardName.METHANE_EXPORTS,
      type: CardType.ACTIVE,
      resourceType: CardResource.FLOATER,
      victoryPoints: 1,

      behavior: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2, tag: Tag.JOVIAN},
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 floater to increase your heat production 1 step',
            spend: {resourcesHere: 1},
            production: {heat: 1},
          },
          {
            title: 'Add a floater to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x333',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER);
          }).br;
          b.or().br;
          b.action('Remove 1 floater from this card to increase your heat production 1 step.', (eb) => {
            eb.resource(CardResource.FLOATER).startAction.production((pb) => pb.heat(1));
          }).br;
          b.resource(CardResource.FLOATER, {amount: 2, secondaryTag: Tag.JOVIAN});
        }),
        description: 'Add 2 floaters to any Jovian card.',
      },
    });
  }
}
