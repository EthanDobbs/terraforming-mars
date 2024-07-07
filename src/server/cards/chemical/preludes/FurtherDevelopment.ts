import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {IPreludeCard} from '../../prelude/IPreludeCard';
import {IPlayer} from '../../../IPlayer';
import {PreludesExpansion} from '../../../preludes/PreludesExpansion';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';

export class FurtherDevelopment extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.FURTHER_DEVELOPMENT,
      tags: [Tag.EARTH],

      startingMegacredits: -3,

      metadata: {
        cardNumber: 'xP32',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(-3).nbsp.prelude().asterix();
        }),
        description: 'Lose 3 M€. Immediately draw 4 prelude cards. Play 1 of them, and discard the rest.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer) {
    if (player.isCorporation(CardName.MANUTECH)) return true;
    return player.canAfford(3);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 3));
    const cards: Array<IPreludeCard> = [
      player.game.preludeDeck.drawLegacy(player.game),
      player.game.preludeDeck.drawLegacy(player.game),
      player.game.preludeDeck.drawLegacy(player.game),
      player.game.preludeDeck.drawLegacy(player.game),
    ];
    return PreludesExpansion.playPrelude(player, cards);
  }
}
