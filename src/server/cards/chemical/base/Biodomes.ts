import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Resource} from '../../../../common/Resource';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';
import {TITLES} from '../../../inputs/titles';

export class Biodomes extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.BIODOMES,
      tags: [Tag.BUILDING],
      cost: 8,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x076',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 8 M€ to increase your plant production 1 step. STEEL MAY BE USED as if you were playing a building card.', (eb) =>
            eb.megacredits(8).super((b) => b.steel(1)).startAction.production((pb) => pb.plants(1)),
          );
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return player.canAfford({cost: 8, steel: true});
  }
  public action(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 8, {canUseSteel: true, title: TITLES.payForCardAction(this.name)}))
      .andThen(() => player.production.add(Resource.PLANTS, 1));
    return undefined;
  }
}
