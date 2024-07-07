import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardResource} from '../../../../common/CardResource';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {CardRenderer} from '../../render/CardRenderer';
import {Board} from '../../../boards/Board';
import {SelectCard} from '../../../inputs/SelectCard';
import {Space} from '../../../boards/Space';

export class MyceliumFungi extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MYCELIUM_FUNGI,
      tags: [Tag.MICROBE],
      cost: 8,
      requirements: {oxygen: 4},
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 3},

      metadata: {
        cardNumber: 'x042',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a greenery tile, add a microbe to ANY card.', (eb) => {
            eb.greenery().startEffect.resource(CardResource.MICROBE).asterix();
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
        }),
        description: 'Requires 4% oxygen.',
      },
    });
  }
  public onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, space: Space) {
    if (cardOwner.id === activePlayer.id && Board.isGreenerySpace(space)) {
      const microbeCards = activePlayer.getResourceCards(CardResource.MICROBE);
      if (microbeCards.length === 1) {
        activePlayer.addResourceTo(this, 1);
        return undefined;
      }
      activePlayer.game.defer(new SimpleDeferredAction(activePlayer, () => new SelectCard(
        'Select card to add 1 microbe for Mycelium Fungi',
        'Add microbe',
        microbeCards).andThen( ([card]) => {
        activePlayer.addResourceTo(card, {log: true});
        return undefined;
      },
      )));
    }
    return undefined;
  }
}
