import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {all} from '../Options';
import {IPlayer} from '../../IPlayer';

export class TerraformingUnion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TERRAFORMING_UNION,
      cost: 9,
      tags: [Tag.WILD],
      requirements: {tr: 25},

      behavior: {
        tr: 2,
      },

      metadata: {
        cardNumber: 'x419',
        renderData: CardRenderer.builder((b) => {
          b.tr(2).nbsp.plus().tr(1, {all}).asterix();
        }),
        description: 'Requires 25 TR. Raise your TR 2 steps. ALL OPPONENTS raise their TR 1 step.'
      }
    })
  }
  public override bespokePlay(player: IPlayer) {
    const otherPlayers = player.game.getPlayers().filter((p) => p.id !== player.id);
    for (const p of otherPlayers) {
      p.increaseTerraformRating(1);
    }
    return undefined;
  }
}
