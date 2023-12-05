import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {max} from '../../Options';

export class AtmosphereLiftingDetonations extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ATMOSPHERE_LIFTING_DETONATIONS,
      tags: [Tag.VENUS],
      cost: 4,
      requirements: {venus: 10, max},

      behavior: {
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'x248',
        renderData: CardRenderer.builder((b) => {
          b.venus(1).nbsp.minus().energy(2);
        }),
        description: 'Venus must be 10% or lower. Raise Venus 1 step. Lose 2 energy.',
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
