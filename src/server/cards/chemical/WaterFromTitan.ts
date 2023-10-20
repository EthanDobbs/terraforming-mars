import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class WaterFromTitan extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 25,
      tags: [Tag.JOVIAN],
      name: CardName.WATER_FROM_TITAN,
      type: CardType.ACTIVE,
      resourceType: CardResource.FLOATER,
      victoryPoints: 2,
      
      action:{
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 2 floaters to place an ocean',
            spend: {resourcesHere: 2},
            ocean: {},
          },
          {
            title: 'Spend 1 titanium to add 2 floaters to this card',
            spend: {titanium: 1},
            addResources: 2,
          }],
        },
      },

      metadata: {
        cardNumber: 'x332',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 titanium to add 2 floaters here.', (eb) => {
            eb.titanium(1).startAction.floaters(2);
          }).br;
          b.or().br;
          b.action('Spend 2 floaters here to place an ocean tile.', (eb) => {
            eb.floaters(2).startAction.oceans(1);
          });
        }),
      },
    });
  }
}
