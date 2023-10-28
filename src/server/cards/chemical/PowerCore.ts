import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {SelectAmount} from '../../inputs/SelectAmount';
import {Size} from '../../../common/cards/render/Size';

export class PowerCore extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.POWER_CORE,
      tags: [Tag.POWER],

      behavior: {
        production: {energy: 2},
        stock: {energy: 4},
      },

      metadata: {
        cardNumber: 'xP25',
        renderData: CardRenderer.builder((b) => {
          b.text('EFFECT: CONVERTING ENERGY TO HEAT DURING PRODUCTION IS OPTIONAL FOR EACH ENERGY RESOURCE.', Size.SMALL).br;
          b.production((pb) => pb.energy(2)).br.energy(4);
        }),
        description: 'Increase your energy production 2 steps and gain 4 energy.'
      },
    });
  }
  public static onProduction(player: IPlayer) {
    if (player.energy === 0) {
      player.finishProductionPhase();
      return;
    }
    if (!player.cardIsInEffect(CardName.SUPERCAPACITORS)) {
      player.defer(
        new SelectAmount('Select amount of energy to convert to heat', 'OK', 0, player.energy, true)
          .andThen((amount) => {
            player.energy -= amount;
            player.heat += amount;
            player.game.log('${0} converted ${1} units of energy to heat', (b) => b.player(player).number(amount));
            player.finishProductionPhase();
            return undefined;
          },
      ));
    }
  }
}
