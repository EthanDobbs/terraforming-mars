import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {CanAffordOptions, IPlayer} from '../../../IPlayer';
import {SelectColony} from '../../../inputs/SelectColony';

export class ColonyReforms extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 5,
      name: CardName.COLONY_REFORMS,
      type: CardType.AUTOMATED,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x384',
        renderData: CardRenderer.builder((b) => {
          b.colonyTile().asterix().nbsp.colon().text('+ 1');
        }),
        description: 'Increase the colony track of a colony tile that you have a colony on 1 step.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    return player.getColoniesCount() > 0;
  }
  public override bespokePlay(player: IPlayer) {
    const colonies = player.game.colonies.filter((colony) => colony.colonies.filter((owner) => owner === player.id).length > 0);
    return new SelectColony('Select a colony to increase the track of', 'Increase track', colonies).andThen((colony) => {
      colony.increaseTrack(1);
      return undefined;
    });
  }
}
