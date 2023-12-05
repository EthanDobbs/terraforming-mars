import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {PlaceOceanTile} from '../../../deferredActions/PlaceOceanTile';
import {Resource} from '../../../../common/Resource';

export class AdvancedHydropower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ADVANCED_HYDROPOWER,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 18,

      metadata: {
        cardNumber: 'x148',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).production((pb) => pb.energy(1).slash().oceans(2, {size: Size.SMALL}));
        }),
        description: 'Place an ocean tile, then increase your energy production 1 step for every 2 ocean tiles in play.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
      player.game.defer(new PlaceOceanTile(player).andThen(() => {
        const energyProduction = Math.floor(player.game.board.getOceanSpaces().length / 2);
        player.production.add(Resource.ENERGY, energyProduction, {log: true});
      }));
      return undefined;
  }
}
