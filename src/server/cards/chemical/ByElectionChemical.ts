import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Turmoil} from '../../turmoil/Turmoil';

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
    const turmoil = Turmoil.getTurmoil(player.game);
    Turmoil.ifTurmoil((player.game), (turmoil) => {
      turmoil.chooseRulingParty(player);
    });
    turmoil.delegateReserve.remove(player.id);
    turmoil.setNewChairman(player.id, player.game, false);
    turmoil.sendDelegateToParty(player.id, turmoil.rulingParty.name, player.game);
    turmoil.sendDelegateToParty(player.id, turmoil.rulingParty.name, player.game);
    return undefined;
  }
}
