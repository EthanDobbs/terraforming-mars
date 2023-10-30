import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {IParty} from '../../turmoil/parties/IParty';
import {Turmoil} from '../../turmoil/Turmoil';
import {ChooseRulingPartyDeferred} from '../../turmoil/ChooseRulingPartyDeferred';

export class ByElectionChemical extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.BY_ELECTION_CHEMICAL,

      behavior: {
        tr: 2,
        turmoil: {influenceBonus: 1},
      },

      metadata: {
        cardNumber: 'xP53',
        renderData: CardRenderer.builder((b) => {
          b.effect('You have +1 influence.', (be) => {
            be.startEffect.influence();
          }).br;
          b.rulingParty().chairman().delegates(2).asterix();
        }),
        description: 'Set the ruling party for this generation. Replace the neutral chairman with one of your own delegates and gain the associated TR. Place 2 delegates in the new ruling party.'
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const game = player.game
    Turmoil.ifTurmoil((game), (turmoil) => {
      game.defer(new ChooseRulingPartyDeferred(player, turmoil)).andThen((party: IParty) => {
        turmoil.delegateReserve.remove(player.id);
        turmoil.setNewChairman(player.id, game, false);
        turmoil.sendDelegateToParty(player.id, party.name, game);
        turmoil.sendDelegateToParty(player.id, party.name, game);
       });
    });
    return undefined;
  }
}
