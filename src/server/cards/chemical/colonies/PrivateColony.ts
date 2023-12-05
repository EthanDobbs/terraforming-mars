import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {SelectOption} from '../../../inputs/SelectOption';
import {OrOptions} from '../../../inputs/OrOptions';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class PrivateColony extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 10,
      tags: [Tag.SPACE],
      name: CardName.PRIVATE_COLONY,
      type: CardType.ACTIVE,

      metadata: {
        cardNumber: 'x345',
        renderData: CardRenderer.builder((b) => {
          b.action('Move one of your trade fleets from the Trade Fleets Tile to this card to raise your M€ prodcution 1 step or gain 4 M€. Fleets on this card may no longer trade, and return to the Trade Fleets Tile during the Solar Phase.', (eb) => {
            eb.tradeFleet().asterix().startAction.production((pb) => pb.megacredits(1)).nbsp.or().nbsp.megacredits(4);
          }).br;
        }),
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }
  public action(player: IPlayer) {
    player.colonies.tradesThisGeneration++;
    const opts: Array<SelectOption> = [];
    opts.push(new SelectOption('Gain 4 M€', 'Gain M€').andThen( () => {
      player.stock.add(Resource.MEGACREDITS, 4, {log: true});
      return undefined;
    }));
    opts.push(new SelectOption('Raise your M€ production 1 step', 'Raise M€ production').andThen( () => {
      player.production.add(Resource.MEGACREDITS, 1, {log: true});
      return undefined;
    }));
    return new OrOptions(...opts);
  }
}
