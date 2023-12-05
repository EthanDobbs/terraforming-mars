import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Tag} from '../../../../common/cards/Tag';

export class DeepWellPump extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DEEP_WELL_PUMP,
      cost: 7,
      tags: [Tag.BUILDING],

      behavior: {
        ocean: {},
      },

      metadata: {
        cardNumber: 'x095',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).nbsp.minus().energy(2);
        }),
        description: 'Place an ocean tile and lose 2 energy.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.energy >= 2;
  }
  public override bespokePlay(player: IPlayer) {
    player.energy -= 2;
    return undefined;
  }
}
