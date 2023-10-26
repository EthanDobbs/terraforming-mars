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
import {ICard} from '../ICard';
import {SelectCard} from '../../../server/inputs/SelectCard';

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
            eb.megacredits(6).openBrackets.titanium(1).closeBrackets.startAction.asteroids(1).asterix();
          }).br;
          b.action('Remove 1 asteroid from this card to increase your TR 1 step.', (eb) => {
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
    const asteroidCards = player.getResourceCards(CardResource.ASTEROID);
    const opts: Array<SelectOption> = [];

    const addResource = new SelectOption('Pay 6 M€ to add 1 asteroid to any card', 'Pay').andThen( () => this.addResource(player, asteroidCards) );
    const spendResource = new SelectOption('Remove 1 asteroid to raise your TR 1 step', 'Remove asteroid').andThen( () => this.spendResource(player) );

    if (this.resourceCount > 0) {
      opts.push(spendResource);
    } else {
      return this.addResource(player, asteroidCards);
    }

    if (player.canAfford({cost: 6, titanium: true})) {
      opts.push(addResource);
    } else {
      return this.spendResource(player);
    }

    return new OrOptions(...opts);
  }

  private addResource(player: IPlayer, asteroidCards: ICard[]) {
    player.game.defer(new SelectPaymentDeferred(player, 6, {canUseTitanium: true, title: TITLES.payForCardAction(this.name)}));

    if (asteroidCards.length === 1) {
      player.addResourceTo(this, {log: true});
      return undefined;
    }

    return new SelectCard(
      'Select card to add 1 asteroid',
      'Add asteroid',
      asteroidCards).andThen( ([card]) => {
        player.addResourceTo(card, {log: true});
        return undefined;
      },
    );
  }

  private spendResource(player: IPlayer) {
    player.removeResourceFrom(this);
    player.increaseTerraformRating(1);
    player.game.log('${0} removed an asteroid resource to increase their TR 1 step', (b) => b.player(player));
    return undefined;
  }
}
