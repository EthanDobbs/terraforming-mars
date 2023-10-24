import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {IPlayer} from '../../IPlayer';
import {Tag} from '../../../common/cards/Tag';

export class Canals extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CANALS,
      cost: 11,
      tags: [Tag.BUILDING],

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'x202',
        renderData: CardRenderer.builder((b) => {
          b.effect('Ocean tiles grant you adjacency bonus of +1MC.', (eb) => {
            eb.emptyTile('normal', {size: Size.SMALL}).oceans(1, {size: Size.SMALL}).startEffect.nbsp.plus().megacredits(1);
          }).br;
          b.production((pb) => pb.megacredits(2));
        }),
        description: 'Raise your MC production 2 steps.',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    player.oceanBonus += 1;
    return undefined;
  }

  public override onDiscard(player: IPlayer) {
    player.oceanBonus -= 1;
  }
}
