import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectPlayer} from '../../../inputs/SelectPlayer';
import {SelectOption} from '../../../inputs/SelectOption';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class DirectedSabotageImpact extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DIRECTED_SABOTAGE_IMPACT,
      tags: [Tag.SPACE],
      cost: 18,
      victoryPoints: -1,

      behavior: {
        global: {temperature: 1},
        ocean: {},
      },

      metadata: {
        cardNumber: 'x385',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1);
          b.oceans(1).br;
          b.minus().megacredits(8, {all}).plants(3, {all});
        }),
        description: 'Raise the temperature 1 step and place an ocean tile. Remove up to 8 M€ and up to 3 plants from any player.',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const Players = player.game.getPlayers().filter((otherPlayer) => otherPlayer.id !== player.id);

    if (player.game.isSoloMode()) {
      return undefined;
    }
    return new OrOptions(
      new SelectPlayer(
        Array.from(Players),
        'Select player to remove up to 8 M€ and 3 plants from',
        'Remove resources')
        .andThen((selectedPlayer) => {
          selectedPlayer.stock.deduct(Resource.MEGACREDITS, 8, {log: true, from: player});
          selectedPlayer.stock.deduct(Resource.PLANTS, 3, {log: true, from: player});
          return undefined;
        }),
      new SelectOption(
        'Do not remove resources',
        'Confirm'),
    );
  }
}
