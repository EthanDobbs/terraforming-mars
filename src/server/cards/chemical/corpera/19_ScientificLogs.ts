import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {CardRenderer} from '../../render/CardRenderer';
import {Priority} from '../../../deferredActions/Priority';

export class ScientificLogs extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SCIENTIFIC_LOGS,
      tags: [Tag.SCIENCE],
      cost: 5,
      resourceType: CardResource.SCIENCE,

      metadata: {
        cardNumber: 'xCE19',
        renderData: CardRenderer.builder((b) => {
          b.tag(Tag.EVENT).colon().resource(CardResource.SCIENCE).br;
          b.or().br;
          b.minus().resource(CardResource.SCIENCE, 2).nbsp.plus().cards(1);
        }),
        description: 'When you play an event card, either add a science resource to this card, or remove 2 science resources from this card to draw a card.',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    if (card.type === CardType.EVENT) {
      player.game.defer(new SimpleDeferredAction(
        player,
        () => {
          // Can't remove a resource
          if (this.resourceCount < 2) {
            player.addResourceTo(this, 1);
            return undefined;
          }
          const options = new OrOptions(
            new SelectOption('Remove 2 science resources from this card to draw a card', 'Remove resources').andThen(() => {
              this.resourceCount -= 2;
              player.drawCard();
              return undefined;
            }),
            new SelectOption('Add a science resource to this card', 'Add resource').andThen(() => {
              player.addResourceTo(this, 1);
              return undefined;
            }),
          );
          options.title = 'Select an option for Scientific Logs';
          return options;
        },
      ), Priority.SUPERPOWER);
    }
    return undefined;
  }
}
