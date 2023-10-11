import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { IPlayer } from '../../IPlayer';
import { Space } from '../../boards/Space';
import { SelectSpace } from '../../inputs/SelectSpace';
import { CanAffordOptions } from '../../IPlayer';

export class HugeCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HUGE_CITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 35,
      requirements: {cities: 2},

      behavior: {
        production: {energy: -2, megacredits: 6},
      },

      metadata: {
        cardNumber: 'x092',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().megacredits(6);
          })
          b.city().city().asterix();
        }),
        description: 'Requires that you own 2 cities. Lower your energy production 2 steps and raise your MC production 6 steps. Place 2 adjacent city tiles.' 
      },
    });
  }
  private getSpacesForFirstCity(player: IPlayer, canAffordOptions?: CanAffordOptions): ReadonlyArray<Space> {
    return player.game.board.getAvailableSpacesForCity(player, canAffordOptions)
      .filter((space) => this.getSpacesForSecondCity(player, space, canAffordOptions).length > 0);
  }
  private getSpacesForSecondCity(player: IPlayer, firstCity: Space, canAffordOptions?: CanAffordOptions): ReadonlyArray<Space> {
    return player.game.board.getAdjacentSpaces(firstCity)
      .filter((space) => player.game.board.getAvailableSpacesForCity(player, canAffordOptions).includes(space));
  }

  public override bespokeCanPlay(player: IPlayer, canAffordOptions: CanAffordOptions): boolean {
    return this.getSpacesForFirstCity(player, canAffordOptions).length > 0 && player.production.energy >= 2;
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectSpace('Select a space for the first city', this.getSpacesForFirstCity(player)).andThen((firstCity) => {
      return new SelectSpace('Select a space for the second city adjacent to the first city', this.getSpacesForSecondCity(player, firstCity)).andThen((secondCity) => {
        player.game.addCity(player, firstCity);
        player.game.addCity(player, secondCity);
        return undefined;
      });
    })
  }
}
