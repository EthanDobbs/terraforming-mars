import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {Tag} from '../../../../common/cards/Tag';
import {IProjectCard} from '../../IProjectCard';
import {IPlayer} from '../../../IPlayer';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';

export class NuclearFuelMining extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.NUCLEAR_FUEL_MINING,
      tags: [Tag.EARTH],

      behavior: {
        production: {steel: 1, energy: 2},
      },
      startingMegacredits: -2,

      metadata: {
        cardNumber: 'xP16',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(1).energy(2)).megacredits(-2);
        }),
        description: 'Increase your steel production 1 step and your energy production 2 steps. Lose 2 M€.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer) {
    return player.canAfford(2);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 2));
    return undefined;
  }
}
