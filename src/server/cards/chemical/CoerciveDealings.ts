import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {Resource} from '../../../common/Resource';
import {PlayerInput} from '../../PlayerInput';
import {all} from '../Options';

export class CoerciveDealings extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.COERCIVE_DEALINGS,

      behavior: {
        stock: {megacredits: 10},
        production: {megacredits: 2},
      },
      startingMegacredits: 10,

      metadata: {
        cardNumber: 'xP07',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).nbsp.megacredits(10).nbsp.production((pb) => pb.megacredits(-1, {all})).asterix();
        }),
        description: 'Increase your M€ production 2 steps and gain 10 M€. Decrease ALL OPPONENT\'S M€ production 1 step.'
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    player.game.getPlayers().filter((p) => p.id !== player.id).forEach((opponent) => {
      opponent.production.add(Resource.MEGACREDITS, -1, {log: true})
    })
    return undefined;
  }
}
