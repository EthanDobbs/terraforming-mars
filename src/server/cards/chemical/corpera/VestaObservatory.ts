import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {SelectAmount} from '../../../inputs/SelectAmount';
import {Resource} from '../../../../common/Resource';

export class VestaObservatory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.VESTA_OBSERVATORY,
      tags: [Tag.SCIENCE, Tag.SPACE],
      cost: 11,

      resourceType: CardResource.ASTEROID,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x183',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a science tag, including this, add an asteroid to this card', (eb) => {
            eb.science(1, {played}).startEffect.asteroids(1);
          }).br;
          b.action('Spend 1 titanium to remove X asteroids from this card and look at X cards from the deck, take 1 into your hand, and discard the rest.', (eb) => {
            eb.titanium(1).startAction.minus().text('X').asteroids(1).nbsp.plus().text('X').cards(1).asterix();
          }).br;
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.SCIENCE);
    player.addResourceTo(this, {qty, log: true});
  }
  public canAct(player: IPlayer): boolean {
    return player.titanium > 0 && this.resourceCount > 0;
  }
  public action(player: IPlayer) {
    return new SelectAmount('Select amount of asteroids to remove', 'OK', 1, this.resourceCount)
      .andThen((amount) => {
        player.stock.deduct(Resource.TITANIUM, 1);
        this.resourceCount -= amount
        if (amount === 1) {
          player.drawCard();
          return undefined;
        }
        player.drawCardKeepSome(amount, {keepMax: 1});
        return undefined;
      });
  }
}
