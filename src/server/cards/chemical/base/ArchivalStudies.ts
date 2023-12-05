import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class ArchivalStudies extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ARCHIVAL_STUDIES,
      cost: 6,

      metadata: {
        cardNumber: 'x026',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(2).slash().event({played});
        }),
        description: 'Gain 2 M€ for each event you\'ve played, including this',
      },
    });
  }
  public override bespokePlay(player: IPlayer): undefined {
    const events = player.playedCards.filter((card) => card.type === CardType.EVENT).length + 1;
    player.stock.add(Resource.MEGACREDITS, events * 2);
    return undefined;
  }
}
