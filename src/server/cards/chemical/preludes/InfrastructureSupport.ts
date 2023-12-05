import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IActionCard} from '../../ICard';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';
import {played} from '../../Options';

export class InfrastructureSupport extends PreludeCard implements IActionCard{
  constructor() {
    super({
      name: CardName.INFRASTRUCTURE_SUPPORT,
      tags: [Tag.BUILDING],

      behavior: {
        stock: {steel: 3},
        production: {steel: 1},
      },

      metadata: {
        cardNumber: 'xP15',
        renderData: CardRenderer.builder((b) => {
          b.action('Gain 1 M€ for every 3 building tags you have.', (eb) => {
            eb.empty().startAction.megacredits(1).slash().building(3, {played});
          }).br;
          b.production((pb) => pb.steel(1)).steel(3);
        }),
        description: 'Increase your steel production 1 step and gain 3 steel.'
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.tags.count(Tag.BUILDING) >= 3;
  }
  public action(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, Math.floor(player.tags.count(Tag.BUILDING) / 3), {log: true});
    return undefined;
  }
}
