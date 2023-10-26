import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class GalileanMiningNetwork extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 19,
      tags: [Tag.JOVIAN],
      name: CardName.GALILEAN_MINING_NETWORK,
      type: CardType.ACTIVE,
      resourceType: CardResource.FLOATER,
      victoryPoints: 1,

      behavior:{
        stock: {titanium: 2},
      },
      
      action:{
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 2 floaters to increase your titanium production 1 step',
            spend: {resourcesHere: 2},
            production: {titanium: 1},
          },
          {
            title: 'Add a floater to any Jovian card',
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1, tag: Tag.JOVIAN},
          }],
        },
      },

      metadata: {
        cardNumber: 'x334',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to any Jovian card.', (eb) => {
            eb.empty().startAction.floaters(1, {secondaryTag: Tag.JOVIAN});
          }).br;
          b.or().br;
          b.action('Spend 1 floater here to increase your titanium production 1 step.', (eb) => {
            eb.floaters(2).startAction.production((pb) => pb.titanium(1));
          }).br;
          b.titanium(2);
        }),
        description: 'Gain 2 titanium.'
      },
    });
  }
}
