import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {max, all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectPlayer} from '../../inputs/SelectPlayer';
import {SelectOption} from '../../inputs/SelectOption';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';
import {SelectCard} from '../../inputs/SelectCard';

export class DwarfPlanetCollision extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DWARF_PLANET_COLLISION,
      tags: [Tag.SPACE],
      cost: 33,
      requirements: {venus: 6, max},

      behavior: {
        global: {venus: 3},
      },

      metadata: {
        cardNumber: 'x243',
        renderData: CardRenderer.builder((b) => {
          b.venus(3).br.minus().megacredits(8, {all, secondaryTag: Tag.VENUS}).floaters(2, {all, secondaryTag: Tag.VENUS});
        }),
        description: 'Requires Venus 6% or lower. Raise Venus 3 steps, Remove up to 8 M€ from any player with a Venus tag, and remove up to 2 floaters from any Venus card.',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const venusTagPlayers = player.game.getPlayers().filter((otherPlayer) => otherPlayer.id !== player.id && otherPlayer.tags.count(Tag.VENUS, 'raw') > 0);

    if (player.game.isSoloMode()|| venusTagPlayers.length === 0) {
      return undefined;
    }

    if (venusTagPlayers.length > 0) {
      return new OrOptions(
        new SelectPlayer(
          Array.from(venusTagPlayers),
          'Select player to remove up to 8 M€ from',
          'Remove M€')
          .andThen((selectedPlayer) => {
            selectedPlayer.stock.deduct(Resource.MEGACREDITS, 8, {log: true, from: player});
            return undefined;
          }),
        new SelectOption(
          'Do not remove M€',
          'Confirm')
      ).andThen(() => {
        const resourceCards = RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.FLOATER, false).filter((card) => card.tags.includes(Tag.VENUS));

        if (resourceCards.length === 0) {
          return undefined;
        }
        const selectCard = new SelectCard(
          'Select card to remove 2 floaters from',
          'Remove resource(s)',
          resourceCards,
          {showOwner: true})
          .andThen(([card]) => {
            const owner = player.game.getCardPlayerOrThrow(card.name);
            owner.removeResourceFrom(card, 2, {removingPlayer: player});
            return undefined;
          });
          return new OrOptions(
            selectCard,
            new SelectOption('Do not remove'));
      });
    }
    return undefined;
  }
}
