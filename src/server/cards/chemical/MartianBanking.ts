import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class MartianBanking extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MARTIAN_BANKING,
      tags: [Tag.BUILDING],
      cost: 10,

      behavior: {
        production: {megacredits: 4},
      },

      metadata: {
        cardNumber: 'x210',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(4).nbsp.megacredits(1, {all});
          });
        }),
        description: 'Increase M€ production 4 steps. ALL OPPONENTS increase their MC production 1 step',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const otherPlayers = player.game.getPlayers().filter((p) => p.id !== player.id);
    for (const p of otherPlayers) {
      p.production.add(Resource.MEGACREDITS, 1)
    }
    return undefined;
  }
}
