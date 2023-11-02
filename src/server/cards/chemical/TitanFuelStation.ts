import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {Priority, SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';
import {Resource} from '../../../common/Resource';

export class TitanFuelStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TITAN_FUEL_STATION,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 18,
      resourceType: CardResource.FLOATER,
      victoryPoints: 1,

      behavior:{
        colonies: {addTradeFleet: 1},
      },

      metadata: {
        cardNumber: '335',
        renderData: CardRenderer.builder((b) => {
          b.space({played}).colon().floaters(1).br;
          b.or().br;
          b.minus().floaters(1).plus().titanium(2).br;
          b.description('When you play a space tag, including this, either add a floater to this card, or remove 1 floater from this card to gain 2 titanium.').br;
          b.tradeFleet();
        }),
        description: 'Gain a trade fleet',
      },
    });
  }


  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    const spaceTags = player.tags.cardTagCount(card, Tag.SPACE);
    for (let i = 0; i < spaceTags; i++) {
      player.game.defer(new SimpleDeferredAction(
        player,
        () => {
          // Can't remove a resource
          if (this.resourceCount === 0) {
            player.addResourceTo(this, 1);
            return undefined;
          }
          const options = new OrOptions(
            new SelectOption('Remove a floater from this card to gain 2 titanium', 'Remove floater').andThen(() => {
              player.removeResourceFrom(this);
              player.stock.add(Resource.TITANIUM, 2);
              return undefined;
            }),
            new SelectOption('Add a floater to this card', 'Add floater').andThen(() => {
              player.addResourceTo(this, 1);
              return undefined;
            }),
          );
          options.title = 'Select an option for Titan Fuel Station';
          return options;
        },
      ), Priority.SUPERPOWER); // Unshift that deferred action
    }
    return undefined;
  }
}
