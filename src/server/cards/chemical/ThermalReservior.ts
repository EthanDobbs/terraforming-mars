import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {SelectAmount} from '../../inputs/SelectAmount';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';
import {CardResource} from '../../../common/CardResource';

export class ThermalReservior extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.THERMAL_RESERVIOR,
      tags: [Tag.BUILDING],
      cost: 25,

      behavior: {
        ocean: {},
      },

      metadata: {
        cardNumber: 'x356',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).production((pb) => pb.text('-X').heat(1)).text('+X').microbes(1).asterix();
        }),
        description: 'Place an ocean tile. Decrease your heat production any number of steps and add the same number of microbes to ANOTHER card.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer) {
    return player.production.heat >= 1;
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectAmount('Select amount of heat production to decrease', 'Decrease', 1, player.production.heat)
      .andThen((amount) => {
        player.production.add(Resource.HEAT, -amount, {log: true});
        player.game.defer(new AddResourcesToCard(player, CardResource.MICROBE, {count: amount}));
        return undefined;
      });
  }
}
