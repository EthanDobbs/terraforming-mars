import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HighAltitudeStations extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.HIGH_ALTITUDE_STATIONS,
      tags: [Tag.VENUS],
      cost: 8,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {tag: Tag.SCIENCE, count: 2},
      resourceType: CardResource.FLOATER,

      action: {
        spend: {titanium: 1},
        addResources: 1,
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'x255',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 titanium to raise your M€ production 1 step and add 1 floater here.', (eb) => {
            eb.titanium(1).startAction.production((pb) => pb.megacredits(1)).floaters(1);
          }).br;
          b.vpText('1 VP per 2 floaters on this card.').br;
        }),
        description: 'Requires 2 science tags.',
      },
    });
  }
}
