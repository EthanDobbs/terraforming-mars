import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {digit} from '../../Options';

export class RareMineralReserve extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.RARE_MINERAL_RESERVE,

      behavior: {
        stock: {steel: 4, titanium: 6},
      },

      metadata: {
        cardNumber: 'xP29',
        renderData: CardRenderer.builder((b) => {
          b.steel(4, {digit}).nbsp.titanium(6, {digit});
        }),
        description: 'Gain 4 steel and 6 titanium.',
      },
    });
  }
}
