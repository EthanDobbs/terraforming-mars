import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class AsteroidMiningExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ASTEROID_MINING_EXPEDITION,
      tags: [Tag.SPACE],
      cost: 12,

      behavior: {
        stock: {steel: 3, titanium: 5},
      },

      metadata: {
        cardNumber: 'xB21',
        renderData: CardRenderer.builder((b) => {
          b.steel(3, {digit}).nbsp.titanium(5, {digit}).nbsp.minus().energy(2, {digit});
        }),
        description: 'Gain 3 steel and 5 titanium. Lose 2 energy.',
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
