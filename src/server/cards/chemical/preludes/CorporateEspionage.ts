import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IPreludeCard, isPreludeCard} from '../../prelude/IPreludeCard';
import {IPlayer} from '../../../IPlayer';
import {PreludesExpansion} from '../../../preludes/PreludesExpansion';
import {PlayerInput} from '../../../PlayerInput';
import {all} from '../../Options';

export class CorporateEspionage extends PreludeCard implements IPreludeCard{
  constructor() {
    super({
      name: CardName.CORPORATE_ESPIONAGE,

      metadata: {
        cardNumber: 'xP33',
        renderData: CardRenderer.builder((b) => {
          b.text('COPY').nbsp.prelude({all}).asterix();
        }),
        description: 'As your first action, copy the direct effects of an opponent\'s prelude. SOLO: As your first action, draw 2 prelude cards. Play 1, and discard the other.'
      },
    });
  }
  initialAction(player: IPlayer): PlayerInput | undefined {
    const game = player.game;
    if (player.game.isSoloMode()){
    const cards = [
      game.preludeDeck.drawLegacy(player.game),
      game.preludeDeck.drawLegacy(player.game),
    ];
    return PreludesExpansion.playPrelude(player, cards);
    }
    const opponentsPreludes: Array<IPreludeCard> = [];
    game.getPlayers().filter((p) => p.id !== player.id).forEach((p) => {
      p.playedCards.filter(isPreludeCard).filter((card) => card.canPlay(player)).forEach((prelude) => {
        opponentsPreludes.push(prelude);
      });
    })
    return PreludesExpansion.playPrelude(player, opponentsPreludes, 'action-only');
  }
}
