import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Space} from '../../../boards/Space';
import {SpaceBonus} from '../../../../common/boards/SpaceBonus';
import {PlaceCityTile} from '../../../deferredActions/PlaceCityTile';

export class MiningCommunity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MINING_COMMUNITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 20,

      behavior: {
        production: {energy: -2, megacredits: 3, steel: 1},
      },

      metadata: {
        cardNumber: 'xB88',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().megacredits(3).steel(1);
          });
          b.city().asterix();
        }),
        description: 'Decrease your energy production 2 steps. Increase your M€ production 3 steps and your steel production 1 step. Place a city tile ON A STEEL PLACEMENT BONUS, regardless of adjacent city tiles.',
      },
    });
  }
  private getSpacesForCity(player: IPlayer): ReadonlyArray<Space> {
    return player.game.board.getAvailableSpacesOnLand(player).filter((space) => space.bonus.includes(SpaceBonus.STEEL));
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return this.getSpacesForCity(player).length > 0 && player.production.energy >= 2;
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(
      new PlaceCityTile(
        player,
        {
          spaces: this.getSpacesForCity(player),
          title: 'Select a space with a steel placement bonus',
        }));
    return undefined;
  }
}
