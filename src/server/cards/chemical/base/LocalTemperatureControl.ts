import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {GlobalParameter} from '../../../../common/GlobalParameter';

export class LocalTemperatureControl extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LOCAL_TEMPERATURE_CONTROL,
      cost: 12,
      globalParameterRequirementBonus: {parameter: GlobalParameter.TEMPERATURE, steps: 4},

      behavior: {
        production: {heat: 2},
      },

      metadata: {
        cardNumber: 'x067',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your temperature requirements are +/- 4 steps, your choice in each case.', (eb) => {
            eb.plate('Temperature requirements').startEffect.text('+/- 4');
          }).br;
          b.production((pb) => pb.heat(2));
        }),
        description: 'Increase your heat production 2 steps.',
      },
    });
  }
}
