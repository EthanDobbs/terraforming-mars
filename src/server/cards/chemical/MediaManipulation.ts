import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Turmoil} from '../../turmoil/Turmoil';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {SelectParty} from '../../inputs/SelectParty';

export class MediaManipulation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MEDIA_MANIPULATION,
      cost: 5,

      metadata: {
        cardNumber: 'x388',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).asterix();
        }),
        description: 'Add 2 delegates to SEPARATE parties.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    const turmoil = Turmoil.getTurmoil(player.game);
    return turmoil.getAvailableDelegateCount(player.id) >= 2;
  }
  public override bespokePlay(player: IPlayer): undefined {
    const turmoil = Turmoil.getTurmoil(player.game);
    player.game.defer(new SimpleDeferredAction(player, () => new SelectParty('Select first party to add a delegate','add delegate', turmoil.parties.map((party) => party.name)).andThen((firstParty) => {
      turmoil.sendDelegateToParty(player.id, firstParty, player.game);
      return new SelectParty('Select second party to add a delegate','add delegate', turmoil.parties.map((party) => party.name).filter((party) => party !== firstParty)).andThen((secondParty) => {
        turmoil.sendDelegateToParty(player.id, secondParty, player.game);
        return undefined;
      });
    })));
    return undefined
  }
}
