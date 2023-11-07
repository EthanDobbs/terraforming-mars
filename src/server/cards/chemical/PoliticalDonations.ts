import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {Resource} from '../../../common/Resource';
import {Turmoil} from '../../turmoil/Turmoil';
  
export class PoliticalDonations extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.POLITICAL_DONATIONS,
      cost: 0,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x390',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(3).slash().partyLeaders(1);
        }),
        description: 'Gain 3 M€ for each party leader you have.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const turmoil = Turmoil.getTurmoil(player.game);
    let partyLeaders = 0;
    turmoil.parties.forEach((party) => {
      if (party.partyLeader === player) {
        partyLeaders++;
      }
    });
    player.stock.add(Resource.MEGACREDITS, partyLeaders * 3, {log: true});
    return undefined;
  }
}
