import {Tag} from '../../../../common/cards/Tag';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import { IPlayer } from '../../../IPlayer';
import { DiscardCards } from '../../../deferredActions/DiscardCards';
import { ICard, isIActionCard } from '../../ICard';
import { PlayerInput } from '../../../PlayerInput';
import { OrOptions } from '../../../inputs/OrOptions';
import { SelectOption } from '../../../inputs/SelectOption';

export class OverseerCommittee extends Card implements ICard {
  constructor() {
    super({
      name: CardName.OVERSEER_COMMITTEE,
      type: CardType.ACTIVE,
      tags: [Tag.EARTH],
      cost: 6,

      metadata: {
        cardNumber: 'xCE36',
        description: 'Requires that you discard 2 cards.',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a blue action card, you may immediately use that card\'s action while still being able to use that action again this generation.',
            (eb) => eb.empty().startEffect.nbsp.arrow()).br;
          b.minus().cards(2);
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: ICard): void | PlayerInput | undefined {
    if (isIActionCard(card) && card.canAct(player)) {
      const takeCardAction = new SelectOption(`Preform the action of ${card.name} through Overseer Committee`).andThen(() => {
        player.game.log('${0} used ${1} action through ${2}', (b) => b.player(player).card(card).card(this));
        return card.action(player);
      });
      const ignore = new SelectOption('Do Nothing');
      player.defer(new OrOptions(takeCardAction, ignore));
    }
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.cardsInHand.length > 2; // this card and at least 2 others
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new DiscardCards(player, 2, 2))
    return undefined;
  }
}
