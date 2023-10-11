import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Size } from '../../../common/cards/render/Size';

export class AdvancedHydropower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ADVANCED_HYDROPOWER,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 18,

      behavior: {
        ocean: {},
        production: {energy: {oceans: {}, per: 2}},
      },

      metadata: {
        cardNumber: 'x148',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).production((pb) => pb.energy(1).slash().oceans(2, {size: Size.SMALL}));
        }),
        description: 'Place an ocean tile, the raise your energy production 1 step for every 2 ocean tiles in play.',
      },
    });
  }
}
