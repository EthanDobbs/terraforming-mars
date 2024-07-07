import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';

export class VenusGHGExports extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_GHG_EXPORTS,
      tags: [Tag.VENUS],

      behavior: {
        global: {venus: 1},
        production: {heat: 3},
        // player.cardIsInEffect() doesn't want to trigger until the turn after the card is played
        stock: {heat: 2},
      },
      startingMegacredits: -3,

      metadata: {
        cardNumber: 'xP39',
        renderData: CardRenderer.builder((b) => {
          b.effect('Whenever Venus is terraformed, gain 2 heat.', (eb) => {
            eb.venus(1, {all}).startEffect.heat(2);
          }).br;
          b.venus(1).production((pb) => pb.heat(3)).megacredits(-3);
        }),
        description: 'Raise Venus 1 step, increase your heat production 3 steps, and lose 3 M€.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer) {
    return player.canAfford(3);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 3));
    return undefined;
  }
}
