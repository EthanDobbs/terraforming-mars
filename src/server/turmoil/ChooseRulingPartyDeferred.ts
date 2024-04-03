import {IPlayer} from '../IPlayer';
import {DeferredAction} from '../behaviorComponents/BehaviorComponent';
import {OrOptions} from '../inputs/basicInputs/OrOptions';
import {Turmoil} from './Turmoil';
import {PoliticalAgendas} from './PoliticalAgendas';
import {IParty} from './parties/IParty';
import {SelectOption} from '../inputs/selectables/GenericSelection';

export class ChooseRulingPartyDeferred extends DeferredAction<IParty> {
  private turmoil: Turmoil;
  constructor(player: IPlayer, turmoil: Turmoil) {
    super(player);
    this.turmoil = turmoil;
  }

  public execute() {
    const setRulingParty = new OrOptions();

    // Interesting that this doesn't use SelectParty. Perhaps that's the right choice.
    setRulingParty.title = 'Select new ruling party';
    setRulingParty.options = this.turmoil.parties.map((p: IParty) => new SelectOption(p.name).andThen(() => {
      this.turmoil.rulingPolicy().onPolicyEnd?.(this.player.game);
      this.turmoil.rulingParty = p;
      PoliticalAgendas.setNextAgenda(this.turmoil, this.player.game);
      this.cb(p);
      return undefined;
    }));
    return setRulingParty;
  }
}
