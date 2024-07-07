import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class ShortTermBonuses extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SHORT_TERM_BONUSES,
      cost: 12,
      requirements: {party: PartyName.KELVINISTS},

      metadata: {
        cardNumber: 'x397',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every step you raise your TR, gain 2 M€.', (eb) => {
            eb.tr(1).startEffect.megacredits(2);
          }).br;
        }),
        description: 'Requires that Kelvinists are in power or that you have 2 delegates there.',
      },
    });
  }
  public onIncreaseTerraformRating(player: IPlayer, cardOwner: IPlayer, steps: number): void {
    if (player.id === cardOwner.id) {
      cardOwner.stock.add(Resource.MEGACREDITS, steps * 2, {log: true});
    }
  }
}
