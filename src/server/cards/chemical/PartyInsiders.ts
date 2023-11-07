import {IPlayer} from '../../IPlayer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Turmoil} from '../../turmoil/Turmoil';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {SelectParty} from '../../inputs/SelectParty';
import {digit} from '../Options';

export class PartyInsiders extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.PARTY_INSIDERS,

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'xP56',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).nbsp.delegates(3, {digit}).asterix();
        }),
        description: 'Increase your M€ production 2 steps and place 3 delegates in SEPARATE PARTIES.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    const turmoil = Turmoil.getTurmoil(player.game);
    return turmoil.getAvailableDelegateCount(player) >= 3;
  }
  public override bespokePlay(player: IPlayer): undefined {
    const turmoil = Turmoil.getTurmoil(player.game);
    player.game.defer(new SimpleDeferredAction(player, () => new SelectParty('Select first party to add a delegate','add delegate', turmoil.parties.map((party) => party.name)).andThen((firstParty) => {
      turmoil.sendDelegateToParty(player, firstParty, player.game);
      return new SelectParty('Select second party to add a delegate','add delegate', turmoil.parties.map((party) => party.name).filter((party) => party !== firstParty)).andThen((secondParty) => {
        turmoil.sendDelegateToParty(player, secondParty, player.game);
          return new SelectParty('Select third party to add a delegate','add delegate', turmoil.parties.map((party) => party.name).filter((party) => party !== firstParty && party !== secondParty)).andThen((thirdParty) => {
            turmoil.sendDelegateToParty(player, thirdParty, player.game);
            return undefined;
          });
        })
      })
    ))
    return undefined
  }
}
