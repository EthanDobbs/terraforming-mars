import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {multiplier} from '../../Options';
import {IPlayer} from '../../../IPlayer';

export class LaserMining extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.LASER_MINING,

      behavior: {
        production: {titanium: 1, heat: 2},
      },

      metadata: {
        cardNumber: 'xP19',
        renderData: CardRenderer.builder((b) => {
          b.effect('You may use titanium resources as 2 M€ each.', (eb) => {
            eb.startEffect.text('X').titanium(1).equals().megacredits(2, {multiplier});
          }).br;
          b.production((pb) => pb.titanium(1).heat(2))
        }),
        description: 'Increase your titanium production 1 step and your heat production 2 steps.'
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    player.canUseTitaniumAsMegacredits = true;
    return undefined;
  }
}
