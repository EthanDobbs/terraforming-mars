import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';
import {all} from '../Options';
/*import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectDelegate} from '../../inputs/SelectDelegate';
import {Turmoil} from '../../turmoil/Turmoil';
import {NeutralPlayer} from '../../turmoil/Turmoil';
import {Delegate} from '../../turmoil/Turmoil';
import {MultiSet} from 'mnemonist';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {SelectParty} from '../../inputs/SelectParty';
import {IParty} from '../../turmoil/parties/IParty';*/

export class DemocraticReform extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DEMOCRATIC_REFORM,
      cost: 7,
      requirements: {party: PartyName.MARS},

      metadata: {
        cardNumber: 'x387',
        renderData: CardRenderer.builder((b) => {
          b.minus().delegates(2, {all}).nbsp.plus().delegates(2).asterix();
        }),
        description: 'Requires that Mars First are in power or that you have 2 delegates there. Remove any 2 non-leader delegates and add 2 NEUTRAL delegates to any parties.',
      },
    });
  }
  /*public override bespokeCanPlay(player: IPlayer): boolean {
    const turmoil = Turmoil.getTurmoil(player.game);
    var nonLeaderDelegates = 0;
    for (const party of turmoil.parties) {
      if (party.delegates.size > 1) {
        nonLeaderDelegates += party.delegates.size - 1;
      }
    }
    return nonLeaderDelegates >= 2;
  }
  public override bespokePlay(player: IPlayer): undefined {
    player.game.defer(new SimpleDeferredAction(player, () => this.removeDelegate(player))).andThen(() => {
      return this.removeDelegate(player)?.andThen(() => {
        const turmoil = Turmoil.getTurmoil(player.game);
        return new SelectParty('Select a party to add a neutral delegate','add delegate', turmoil.parties.map((party) => party.name)).andThen((party) => {
          turmoil.sendDelegateToParty('NEUTRAL', party, player.game);
          return new SelectParty('Select a party to add a neutral delegate','add delegate', turmoil.parties.map((party) => party.name)).andThen((party) => {
            turmoil.sendDelegateToParty('NEUTRAL', party, player.game);
            return undefined;
          });
        });
        })
      });
      return undefined
  }

  private log(player: IPlayer, party: IParty, selectedPlayer: IPlayer | NeutralPlayer) {
    if (selectedPlayer === 'NEUTRAL') {
      player.game.log('${0} removed neutral delegate from ${1}', (b) => b.player(player).party(party));
    } else {
      player.game.log('${0} removed ${1}\'s delegate from ${2}', (b) => b.player(player).player(selectedPlayer).party(party));
    }
  }

  private removeDelegate(player: IPlayer): OrOptions | SelectDelegate | undefined {
    const turmoil = Turmoil.getTurmoil(player.game);
    const orOptions: Array<SelectDelegate> = [];
    // Take each party having more than just the party leader in the area
    for (const party of turmoil.parties) {
      if (party.delegates.size > 1) {
        // Remove the party leader from available choices
        const copy = MultiSet.from(party.delegates);
        if (party.partyLeader !== undefined) {
          copy.remove(party.partyLeader);
        } else {
          // This wouldn't happen normally.
          throw new Error(`partyLeader not defined for ${player.game.id}`);
        }
        const players: Array<IPlayer | NeutralPlayer> = [];
        for (const entry of copy.multiplicities()) {
          if (entry[0] === 'NEUTRAL') {
            players.push('NEUTRAL');
          } else {
            players.push(player.game.getPlayerById(entry[0]));
          }
        }

        if (players.length > 0) {
          const selectDelegate = new SelectDelegate(players, 'Select player delegate to remove from ' + party.name + ' party')
            .andThen((selectedPlayer) => {
              let playerToRemove: Delegate;
              if (selectedPlayer === 'NEUTRAL') {
                playerToRemove = 'NEUTRAL';
              } else {
                playerToRemove = selectedPlayer.id;
              }
              turmoil.removeDelegateFromParty(playerToRemove, party.name, player.game);
              this.log(player, party, selectedPlayer);
              return undefined;
            });
          selectDelegate.buttonLabel = 'Remove delegate';
          orOptions.push(selectDelegate);
        }
      }
    }
    if (orOptions.length === 0) {
      return undefined;
    } else if (orOptions.length === 1) {
      return orOptions[0];
    } else {
      const options = new OrOptions(...orOptions);
      return options;
    }
  }*/
}
