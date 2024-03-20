import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CanAffordOptions, IPlayer} from '../../../IPlayer';
import {TileType} from '../../../../common/TileType';
import {SelectSpace} from '../../../inputs/SelectSpace';
import {Space} from '../../../boards/Space';
import {CardName} from '../../../../common/cards/CardName';
import {Board} from '../../../boards/Board';
import {AdjacencyBonus} from '../../../ares/AdjacencyBonus';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';
import {Resource} from '../../../../common/Resource';
import {TITLES} from '../../../inputs/titles';

export class IndustrialCenterChemical extends Card implements IProjectCard {
  constructor(
    name = CardName.INDUSTRIAL_CENTER_CHEMICAL,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata = {
      cardNumber: 'xR11',
      renderData: CardRenderer.builder((b) => {
        b.action('Spend 6 M€ to increase your steel production 1 step [STEEL MAY BE USED].', (eb) => {
          eb.megacredits(6).openBrackets.steel(1).closeBrackets.startAction.production((pb) => pb.steel(1));
        }).br;
        b.tile(TileType.INDUSTRIAL_CENTER, true, false).asterix();
      }),
      description: 'Place this tile adjacent to a city tile.',
    }) {
    super({
      type: CardType.ACTIVE,
      name,
      tags: [Tag.BUILDING],
      cost: 4,
      adjacencyBonus,

      metadata,
    });
  }

  private getAvailableSpaces(player: IPlayer, canAffordOptions?: CanAffordOptions): Array<Space> {
    return player.game.board.getAvailableSpacesOnLand(player, canAffordOptions)
      .filter((space) => player.game.board.getAdjacentSpaces(space).some((adjacentSpace) => Board.isCitySpace(adjacentSpace)));
  }
  public override bespokeCanPlay(player: IPlayer, canAffordOptions?: CanAffordOptions): boolean {
    return this.getAvailableSpaces(player, canAffordOptions).length > 0;
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select space adjacent to a city tile', this.getAvailableSpaces(player))
      .andThen((space) => {
        player.game.addTile(player, space, {tileType: TileType.INDUSTRIAL_CENTER});
        space.adjacency = this.adjacencyBonus;
        return undefined;
      });
  }
  public canAct(player: IPlayer): boolean {
    return player.canAfford({cost: 6, steel: true});
  }
  public action(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 6, {canUseSteel: true, title: TITLES.payForCardAction(this.name)}))
      .andThen(() => player.production.add(Resource.STEEL, 1));
    return undefined;
  }
}
