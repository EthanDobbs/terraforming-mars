import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {Space} from '../../../boards/Space';
import {Board} from '../../../boards/Board';
import {Resource} from '../../../../common/Resource';
import {Size} from '../../../../common/cards/render/Size';

export class SkyCommunications extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SKY_COMMUNICATIONS,
      tags: [Tag.VENUS],
      cost: 12,
      resourceType: CardResource.FLOATER,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x262',
        renderData: CardRenderer.builder((b) => {
          b.effect('When any city tile is placed, add a floater here.', (eb) => {
            eb.city({all}).startEffect.floaters(1);
          }).br;
          b.action('Gain 1 M€ for each floater here (max 4).', (eb) => {
            eb.empty().startAction.megacredits(1).slash().floaters(1).text('[max 4]', Size.SMALL);
          }).br;
        }),
      },
    });
  }
  public onTilePlaced(_cardOwner: IPlayer, _activePlayer: IPlayer, space: Space) {
    if (Board.isCitySpace(space)) {
      this.resourceCount += 1
    }
    return undefined;
  }
  public canAct(): boolean {
    return true;
  }
  public action(player: IPlayer): undefined {
    player.stock.add(Resource.MEGACREDITS, Math.min(this.resourceCount, 4), {log: true});
    return undefined;
  }
}
