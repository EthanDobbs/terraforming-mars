import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class ArtificialAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ARTIFICIAL_ASTEROID,
      tags: [Tag.SPACE],
      cost: 3,

      behavior: {
        global: {temperature: 1},
      },

      metadata: {
        cardNumber: 'x004',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).nbsp.minus().energy(2, {digit});
        }),
        description: 'Raise the temperature 1 step. Lose 2 energy resources.',
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
