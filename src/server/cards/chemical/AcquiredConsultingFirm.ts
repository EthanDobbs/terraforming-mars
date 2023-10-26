import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {Resource} from '../../../common/Resource';
import {Turmoil} from '../../turmoil/Turmoil';

export class AcquiredConsultingFirm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ACQUIRED_CONSULTING_FIRM,
      cost: 8,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x420',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().delegates(1, {all});
        }),
        description: 'Gain 1 M€ for each active delegate.'
      }
    })
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    let delegates = 0;
    Turmoil.getTurmoil(player.game).parties.forEach((party) => delegates += party.delegates.size);
    player.stock.add(Resource.MEGACREDITS, delegates, {log: true})
    return undefined;
  }
}
