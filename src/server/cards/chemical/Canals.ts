import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import { Size } from '../../../common/cards/render/Size';
import { IPlayer } from '../../IPlayer';

export class Canals extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CANALS,
      cost: 11,

      behavior: {
        production: {megacredits: 2},
      },

      action: {
        production: {megacredits: 1},
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
