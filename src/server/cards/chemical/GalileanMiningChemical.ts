import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {PreludeCard} from '../prelude/PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {SelectPaymentDeferred} from '../../deferredActions/SelectPaymentDeferred';
import {CardRenderer} from '../render/CardRenderer';

export class GalileanMiningChemical extends PreludeCard {
  constructor() {
    super({
      name: CardName.GALILEAN_MINING_CHEMICAL,
      tags: [Tag.JOVIAN],

      behavior: {
        production: {titanium: 2},
      },
      startingMegacredits: -3,

      metadata: {
        cardNumber: 'xR45',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.titanium(2);
          }).br;
          b.megacredits(-3);
        }),
        description: 'Increase your titanium production 2 steps. Pay 3 M€.',
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
