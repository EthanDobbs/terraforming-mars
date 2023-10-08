import {IActionCard} from '../ICard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {CardName} from '../../../common/cards/CardName';
import {SelectPaymentDeferred} from '../../deferredActions/SelectPaymentDeferred';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {TITLES} from '../../inputs/titles';

export class NitrogenAsteroids extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.NITROGEN_ASTEROIDS,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE],
      cost: 6,
      resourceType: CardResource.ASTEROID,

      metadata: {
        cardNumber: 'x030',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 6 M€ to add an asteroid resource to this card [TITANIUM MAY BE USED].', (eb) => {
            eb.megacredits(6).openBrackets.titanium(1).closeBrackets.startAction.asteroids(1);
          }).br;
          b.action('Spend 1 resource from this card to increase your TR 1 step.', (eb) => {
            eb.or().asteroids(1).startAction.tr(1);
          });
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return player.canAfford({cost: 6, titanium: true}) || (this.resourceCount > 0 && player.canAfford({cost: 0, tr: {tr: 1}}));
  }

  public action(player: IPlayer) {
    const opts: Array<SelectOption> = [];

    const addResource = new SelectOption('Pay 6 M€ to add 1 asteroid to this card', 'Pay', () => this.addResource(player));
    const spendResource = new SelectOption('Remove 1 asteroid to raise your TR 1 step', 'Remove asteroid', () => this.spendResource(player));

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    } else {
      return this.addResource(player);
    }

    if (player.canAfford({cost: 6, titanium: true})) {
      opts.push(addResource);
    } else {
      return this.spendResource(player);
    }

    return new OrOptions(...opts);
  }

  private addResource(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 6, {canUseTitanium: true, title: TITLES.payForCardAction(this.name)}));
    player.addResourceTo(this, {log: true});
    return undefined;
  }

  private spendResource(player: IPlayer) {
    player.removeResourceFrom(this);
    player.increaseTerraformRating(1);
    player.game.log('${0} removed an asteroid resource to increase their TR 1 step', (b) => b.player(player));
    return undefined;
  }
}
