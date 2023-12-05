import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';
import {SelectOption} from '../../../inputs/SelectOption';
import {Turmoil} from '../../../turmoil/Turmoil';
import {SelectParty} from '../../../inputs/SelectParty';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {OrOptions} from '../../../inputs/OrOptions';

export class WorldGovernmentDiplomats extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.WORLD_GOVERNMENT_DIPLOMATS,
      tags: [Tag.EARTH],
      cost: 15,

      resourceType: CardResource.DIPLOMACY,

      behavior: {
        tr: 1,
      },

      metadata: {
        cardNumber: 'x395',
        description: 'Raise your TR 1 step.',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, including this, either add a diplomacy resource to this card or remove a diplomacy resource from this card to place a delegate.', (eb) => {
            eb.earth(1, {played}).startEffect.diplomacy(1).or(Size.SMALL).minus().diplomacy(1).plus().delegates(1);
          }).br;
          b.tr(1);
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    if (card.tags.includes(Tag.EARTH) === false) {
      return undefined;
    }
    if (this.resourceCount === 0) {
      player.addResourceTo(this);
      return undefined;
    }
  
    const addResource = new SelectOption('Add a diplomacy resource to World Government Diplomats', 'Add diplomacy resource').andThen( () => {
      player.addResourceTo(this);
      return undefined;
    });

    const spendResource = new SelectOption('Remove 1 diplomacy resource from World Government Diplomats and place a delegate', 'Remove diplomacy resource').andThen( () => {
      player.removeResourceFrom(this, 1);
      const turmoil = Turmoil.getTurmoil(player.game);
      return new SelectParty('Select first party to add a delegate','add delegate', turmoil.parties.map((party) => party.name)).andThen((party) => {
        turmoil.sendDelegateToParty(player, party, player.game);
        return undefined;
      });
    })

    player.game.defer(new SimpleDeferredAction(player,() => new OrOptions(spendResource, addResource)));
    return undefined;
  }
}
