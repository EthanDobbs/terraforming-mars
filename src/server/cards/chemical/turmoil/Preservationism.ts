import {IProjectCard} from '../../IProjectCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Card} from '../../Card';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {Size} from '../../../../common/cards/render/Size';

export class Preservationism extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PRESERVATIONISM,
      cost: 8,

      resourceType: CardResource.PRESERVATION,
      victoryPoints: {resourcesHere: 1},
      requirements: {party: PartyName.REDS},

      metadata: {
        cardNumber: 'x268',
        renderData: CardRenderer.builder((b) => {
          b.action('During the production phase, if you did not raise your TR this generation, add a preservation resource to this card.', (eb) => {
            eb.tr(1, {size: Size.SMALL, cancelled: true}).startEffect.resource(CardResource.PRESERVATION);
          }).br;
          b.vpText('1 VP for every preservation resource on this card.');
        }),
        description: 'Requires that Reds are in power or that you have 2 delegates there.',
      },
    });
  }
  public onProductionPhase(player: IPlayer): void {
    if (!player.generationData.hasRaisedTR) {
      this.resourceCount += 1;
    }
  }
}
