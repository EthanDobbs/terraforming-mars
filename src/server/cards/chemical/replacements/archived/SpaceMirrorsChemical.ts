import {IProjectCard} from '../../../IProjectCard';
import {Tag} from '../../../../../common/cards/Tag';
import {Card} from '../../../Card';
import {CardType} from '../../../../../common/cards/CardType';
import {CardName} from '../../../../../common/cards/CardName';
import {CardRenderer} from '../../../render/CardRenderer';
import {IPlayer} from '../../../../IPlayer';
import {SelectPaymentDeferred} from '../../../../deferredActions/SelectPaymentDeferred';
import {Resource} from '../../../../../common/Resource';
import {TITLES} from '../../../../inputs/titles';

export class SpaceMirrorsChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPACE_MIRRORS_CHEMICAL,
      tags: [Tag.POWER, Tag.SPACE],
      cost: 3,

      metadata: {
        cardNumber: 'xR07',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 6 M€ to increase your energy production 1 step [TITANIUM MAY BE USED].', (eb) => {
            eb.megacredits(6).openBrackets.titanium(1).closeBrackets.startAction.production((pb) => pb.energy(1));
          });
        }),
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.canAfford({cost: 6, titanium: true});
  }
  public action(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 6, {canUseTitanium: true, title: TITLES.payForCardAction(this.name)}))
      .andThen(() => player.production.add(Resource.ENERGY, 1));
    return undefined;
  }
}
