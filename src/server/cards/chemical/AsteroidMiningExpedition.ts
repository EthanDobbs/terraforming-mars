import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class AsteroidMiningExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ASTEROID_MINING_EXPEDITION,
      tags: [Tag.SPACE],
      cost: 7,

      behavior: {
        stock: {steel: 2, titanium: 4}
      },

      metadata: {
        cardNumber: 'x003',
        renderData: CardRenderer.builder((b) => {
          b.steel(2, {digit}).nbsp.titanium(4, {digit}).nbsp.minus().energy(2, {digit});
        }),
        description: 'Gain 2 steel and 4 titanium. Lose 2 energy resources.',
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
